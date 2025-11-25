
function downloadPDF() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Define the PDF file URL
    var pdfUrl = 'Vijay_Thakur_Front-End-Developer_Resume.pdf';

    // Open the connection to the server
    xhr.open('GET', pdfUrl, true);

    // Set the responseType to 'blob' (binary data)
    xhr.responseType = 'blob';

    // Define the onload event handler
    xhr.onload = function() {
        // Check if the request was successful (status 200)
        if (xhr.status === 200) {
            // Create a blob from the response
            var blob = new Blob([xhr.response], {
                type: 'application/pdf'
            });

            // Create a hidden anchor element
            var a = document.createElement('a');
            a.style.display = 'none';

            // Create a URL for the blob data
            var url = window.URL.createObjectURL(blob);

            // Set the anchor's href attribute to the blob URL
            a.href = url;

            // Set the anchor's download attribute with the desired filename
            a.download = 'Vijay_Thakur_Front-End-Developer_Resume.pdf';
            // var pdfUrl = 'ResumeFrontenddeveloper.pdf';

            // Append the anchor to the document
            document.body.appendChild(a);

            // Simulate a click on the anchor to trigger the download
            a.click();

            // Remove the anchor from the document
            document.body.removeChild(a);

            // Release the blob URL
            window.URL.revokeObjectURL(url);
        }
    };

    // Send the request
    xhr.send();
}
