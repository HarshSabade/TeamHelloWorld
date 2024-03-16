document.getElementById('profileForm').addEventListener('submit', handleFileUpload);

function handleFileUpload(event) {
    event.preventDefault() // Prevent page reload

    const fileInput = event.target.querySelector('input[type="file"]');
    const selectedFile = fileInput.files[0]; // Get the selected file

    // Now you can process the selected file (e.g., send it to the server)
    // For demonstration purposes, let's log the file name:
    console.log('Selected file:', selectedFile.name);
    // Create a new Blob from the file data
    const blob = new Blob([selectedFile], { type: selectedFile.type });

    // Create a temporary link to download the file
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'uploaded_file.pdf'; // Set the desired file name

    // Trigger a click event on the link to start the download
    link.click();

    // Clean up the temporary URL
    URL.revokeObjectURL(link.href);
}