document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var position = document.getElementById('position').value;
    var department = document.getElementById('department').value;
    var startDate = document.getElementById('startDate').value;
  
    // Create employee object
    var employee = {
      fullName: fullName,
      email: email,
      position: position,
      department: department,
      startDate: startDate
    };
  
    // You can perform further actions like sending data to a server, storing in local storage, etc.
    console.log(employee);
  
    // Reset form fields
    document.getElementById('employeeForm').reset();
  });
  