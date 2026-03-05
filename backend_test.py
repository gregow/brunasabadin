#!/usr/bin/env python3
import requests
import sys
import json
from datetime import datetime

class GoldenPantherAPITester:
    def __init__(self, base_url="https://golden-panther-bruna.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_base = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, test_name, success, details=""):
        """Log test results"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
        
        result = {
            "test": test_name,
            "status": "PASS" if success else "FAIL", 
            "details": details
        }
        self.test_results.append(result)
        
        status_icon = "✅" if success else "❌"
        print(f"{status_icon} {test_name}: {'PASS' if success else 'FAIL'}")
        if details:
            print(f"   {details}")

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        try:
            response = requests.get(f"{self.api_base}/", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "message" in data and "Golden Panther" in data["message"]:
                    self.log_test("Root Endpoint", True, f"Message: {data['message']}")
                    return True
                else:
                    self.log_test("Root Endpoint", False, f"Unexpected response: {data}")
                    return False
            else:
                self.log_test("Root Endpoint", False, f"Status: {response.status_code}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Root Endpoint", False, f"Connection error: {str(e)}")
            return False

    def test_create_inquiry(self):
        """Test creating a new inquiry"""
        test_inquiry = {
            "name": "Test User",
            "email": "test@example.com", 
            "phone": "+351912345678",
            "tattoo_description": "A beautiful fineline rose tattoo with ornamental details",
            "placement": "forearm",
            "size": "10cm",
            "reference_style": "Fineline"
        }
        
        try:
            response = requests.post(
                f"{self.api_base}/inquiries",
                json=test_inquiry,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ['id', 'name', 'email', 'tattoo_description', 'created_at']
                
                if all(field in data for field in required_fields):
                    self.log_test("Create Inquiry", True, f"Created inquiry with ID: {data.get('id', 'N/A')}")
                    return data  # Return the created inquiry for other tests
                else:
                    missing_fields = [f for f in required_fields if f not in data]
                    self.log_test("Create Inquiry", False, f"Missing fields: {missing_fields}")
                    return None
            else:
                self.log_test("Create Inquiry", False, f"Status: {response.status_code}, Response: {response.text}")
                return None
                
        except requests.exceptions.RequestException as e:
            self.log_test("Create Inquiry", False, f"Connection error: {str(e)}")
            return None

    def test_get_inquiries(self):
        """Test getting all inquiries"""
        try:
            response = requests.get(f"{self.api_base}/inquiries", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Get Inquiries", True, f"Retrieved {len(data)} inquiries")
                    return True
                else:
                    self.log_test("Get Inquiries", False, f"Expected list, got: {type(data)}")
                    return False
            else:
                self.log_test("Get Inquiries", False, f"Status: {response.status_code}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Get Inquiries", False, f"Connection error: {str(e)}")
            return False

    def test_required_field_validation(self):
        """Test validation for required fields"""
        # Test missing name
        invalid_inquiry = {
            "email": "test@example.com",
            "tattoo_description": "Test description"
        }
        
        try:
            response = requests.post(
                f"{self.api_base}/inquiries",
                json=invalid_inquiry,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            # Should return 422 for validation error
            if response.status_code == 422:
                self.log_test("Required Field Validation", True, "Correctly rejected missing name field")
                return True
            else:
                self.log_test("Required Field Validation", False, f"Expected 422, got {response.status_code}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Required Field Validation", False, f"Connection error: {str(e)}")
            return False

    def test_email_validation(self):
        """Test email format validation"""
        invalid_email_inquiry = {
            "name": "Test User",
            "email": "invalid-email-format",
            "tattoo_description": "Test description"
        }
        
        try:
            response = requests.post(
                f"{self.api_base}/inquiries",
                json=invalid_email_inquiry,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            # Should return 422 for validation error
            if response.status_code == 422:
                self.log_test("Email Format Validation", True, "Correctly rejected invalid email format")
                return True
            else:
                self.log_test("Email Format Validation", False, f"Expected 422, got {response.status_code}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Email Format Validation", False, f"Connection error: {str(e)}")
            return False

    def run_all_tests(self):
        """Run all backend tests"""
        print(f"🧪 Starting Golden Panther API Tests")
        print(f"🌐 Testing against: {self.api_base}")
        print("=" * 60)
        
        # Test API connectivity first
        if not self.test_root_endpoint():
            print("❌ Root endpoint failed - stopping tests")
            return False
            
        # Test CRUD operations
        self.test_create_inquiry()
        self.test_get_inquiries()
        
        # Test validation
        self.test_required_field_validation()
        self.test_email_validation()
        
        # Print summary
        print("=" * 60)
        print(f"📊 Test Results: {self.tests_passed}/{self.tests_run} tests passed")
        success_rate = (self.tests_passed / self.tests_run) * 100 if self.tests_run > 0 else 0
        print(f"📈 Success Rate: {success_rate:.1f}%")
        
        return self.tests_passed == self.tests_run

def main():
    tester = GoldenPantherAPITester()
    success = tester.run_all_tests()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())