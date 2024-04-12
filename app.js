// hamburger 
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelectorAll('.nav-link, .login');

    burger.addEventListener('click', () => {
        // Toggle display for navigation links and login button
        navLinks.forEach(link => {
            if (link.id !== 'logo') {
                // If the element is not the logo, toggle its display
                if (link.style.display === "block") {
                    link.style.display = "none";
                } else {
                    // link.style.cssText = "display:flex;flex-direction:column";
                    link.style.display ="block"
                }
            }
        });
    });
});


// adding additional images
    document.querySelector(".next").addEventListener("click", function() {
        
        const additionalImagesRow = document.querySelectorAll('.additional-images');
        
        additionalImagesRow.forEach(img => img.style.cssText= "display:flex;gap:12px ;justify-content:center;align-items:center;flex-wrap:wrap");
    });


    // full screen image
    document.addEventListener('DOMContentLoaded', function() {
        const gridImages = document.querySelectorAll('.image-container .grid img');
        const overlay = document.getElementById('overlay');
        const closeBtn = document.getElementById('close-btn');
        const expandImageElement = document.getElementById('expand-image');
    
        gridImages.forEach(image => {
            image.addEventListener('click',function(){
                expandImage(image);
            });
        });

        closeBtn.addEventListener('click',function(){
            closeImage();
        });

        function expandImage(image){
            expandImageElement.src=image.src;
            overlay.style.display="block";
        }
        function closeImage(){
            overlay.style.display="none";
        }
      
    });
    
    
    

    // gst calculation
    function totalAmount(){
        var priceInput1 = parseFloat(document.getElementById('input1').value);
        var priceInput2 = parseFloat(document.getElementById('input2').value);
        var priceInput3 = parseFloat(document.getElementById('input3').value);
        var priceInput4 = parseFloat(document.getElementById('input4').value);
        var priceInput5 = parseFloat(document.getElementById('input5').value);

        const gstRate = 18; 
        var totalGST = (priceInput1 + priceInput2 + priceInput3 + priceInput4 + priceInput5) * (gstRate / 100);
        var totalAmountwithGst = priceInput1 + priceInput2 + priceInput3 + priceInput4 + priceInput5 + totalGST;
        var totalAmount=priceInput1 + priceInput2 + priceInput3 + priceInput4 + priceInput5;
    
        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<span class="result-item">Total Amount : Rs.${totalAmount}</span><span class="result-item">Total Amount including GST: Rs. ${totalAmountwithGst}</span>`;
    }

