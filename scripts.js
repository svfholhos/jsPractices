(function(){
    const page = document.getElementById('root');
    let show = document.createElement('span');
    let remove = document.createElement('span');
    const image = document.createElement('img');
    const alsoShowImage = document.createElement('span');

    show.innerHTML = "Show";
    remove.innerHTML = "Hide";
    page.style = "width: 100%;padding: 1rem 1rem; margin-top: 2rem";

    page.appendChild(show);
    show.classList.add('button');
    show.style = "border-radius: 5px; background: green; color: #fff; padding: 1rem;";
    
    page.appendChild(remove);
    remove.classList.add('button');
    remove.style = "background: rgb(255, 0, 0); border-radius: 5px; padding: 1rem; margin-left: 2rem;color: #fff"
    
    alsoShowImage.innerText = "Also show image";
    page.appendChild(alsoShowImage);
    alsoShowImage.style = "background: blue; color: #fff; padding: 1rem; border-radius: 5px; margin-left: 2rem";


    image.src = "myimg.webp";
    image.style = "display: none; max-height: 20rem; margin-top: 2rem;";
    page.appendChild(image);
    image.classList.add('img');

    
    show.addEventListener('click', function(event) {
        if(document.getElementsByTagName('img').length){
            image.style.display = "block";
        } else {
            let error = document.createElement('span');
            error.innerHTML = "There's nothing to show...";
            page.appendChild(error);
            error.style = "position: absolute; top: 10rem";
        }
        
    });

    // img event listener
    function toggleImg() {
        image.style.display = "none";
    }
    image.addEventListener('click', toggleImg);

    remove.addEventListener('click', function() {
        if(document.getElementsByClassName('img')[0]) {
            image.removeEventListener('click', toggleImg);
            document.getElementById('img-parent').removeChild(image);
        } else{
            let error = document.createElement('span');
            error.innerHTML = "There's nothing to show...";
            page.appendChild(error);
            error.style = "position: absolute; top: 10rem";
        }
        
    });

    document.getElementsByTagName('body')[0].addEventListener('click', function(event){
        console.log(event.target.nodeName, event.currentTarget.nodeName);
        alert('Something was clicked');
        
    });

    alsoShowImage.addEventListener('click', function(event) {
        event.stopPropagation();
        show.click();
    });

    const imgParent = document.createElement('div');
    imgParent.id = ('imgParent');
    page.appendChild(imgParent);
    imgParent.appendChild(image);
    imgParent.id = "img-parent";
    let customEvent = new CustomEvent('customEvent', {
        alert: "This is a custom event"
    });

    imgParent.addEventListener('customEvent', customEvent);
    imgParent.dispatchEvent(customEvent);
})();


