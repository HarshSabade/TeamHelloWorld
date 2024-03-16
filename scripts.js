document.addEventListener('DOMContentLoaded', () => {
    const resumeForm = document.getElementById('resumeForm');
    const uploadMessage = document.getElementById('uploadMessage');
    const jobListings = document.getElementById('jobListings');

    resumeForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('resume', document.getElementById('resumeFile').files[0]);

        try {
            const response = await fetch('YOUR_BACKEND_UPLOAD_ENDPOINT', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            uploadMessage.innerText = data.message;
        } catch (error) {
            console.error('Error uploading resume:', error);
            uploadMessage.innerText = 'Error uploading resume.';
        }
    });

    // Function to fetch and populate job listings (replace with actual data fetching logic)
    async function fetchJobListings() {
        try {
            const response = await fetch('YOUR_BACKEND_JOB_LISTINGS_ENDPOINT');
            const jobData = await response.json();
            
            jobListings.innerHTML = ''; // Clear previous listings
            
            jobData.forEach(job => {
                const jobItem = document.createElement('div');
                jobItem.classList.add('jobListing');
                jobItem.innerHTML = `
                    <h3>${job.title}</h3>
                    <p>Category: ${job.category}</p>
                    <p>Description: ${job.description}</p>
                `;
                jobListings.appendChild(jobItem);
            });
        } catch (error) {
            console.error('Error fetching job listings:', error);
        }
    }

    // Call fetchJobListings when the page loads
    fetchJobListings();
});
