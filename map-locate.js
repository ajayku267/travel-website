let search = document.getElementById('locate');
let mapBox = document.getElementById('map-locate');
let mapbtn = document.getElementById('mapbtn');

console.log(mapBox);



document.addEventListener('click', (event) => {
    // If the clicked element is not the box, hide the box
    if (event.target != mapbtn) {
        mapBox.style.display = 'none';
    }
});


// Add a listener for the keydown event on the input element
search.addEventListener("keydown", function(event) {
  // Check if the pressed key is the enter key
  if (event.key == "Enter") {
    // Show the box here
    console.log("btn working");
    if(search.value.toLowerCase()=="shimla"){
        console.log(search.value);
        mapBox.innerHTML=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54674.13522746133!2d77.12400169534264!3d31.07821466846596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e3e35d6e67%3A0x1f7e7ff6ff9f54b7!2sShimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1671120062782!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        mapBox.style.display="block";
    }
    else if(search.value.toLowerCase()=="kullu"){
        console.log(search.value);
        mapBox.innerHTML=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27081.861266898995!2d77.09378278265783!3d31.954584348581236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904f6a95c673edb%3A0x40f8c144f79ad609!2sKullu%2C%20Himachal%20Pradesh%20175101!5e0!3m2!1sen!2sin!4v1671123551160!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        mapBox.style.display="block";
    }
    else if(search.value.toLowerCase()=="dharamshala"){
        console.log(search.value);
        mapBox.innerHTML=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27004.274349447183!2d76.30165563311058!3d32.21677734324714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b50df65bd7311%3A0x3e08bdb100c6dc10!2sDharamshala%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1671124967550!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        mapBox.style.display="block";
    }
    else if(search.value.toLowerCase()=="una"){
        console.log(search.value);
        mapBox.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27223.5518548901!2d76.25133338183103!3d31.47072710868879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ad053bccff95d%3A0x4be9fd7ce7d7390e!2sUna%2C%20Himachal%20Pradesh%20174303!5e0!3m2!1sen!2sin!4v1671266141527!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        mapBox.style.display="block";
    }
    else if(search.value.toLowerCase()=="hamirpur"){
        console.log(search.value);
        mapBox.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27159.344817250723!2d76.5010211322057!3d31.690806754049134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d44c8c5639a5%3A0x2315ba2666cfba94!2sHamirpur%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1671266284932!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        mapBox.style.display="block";
    }
    else{
        mapBox.style.display="none";
    }

  }
});







mapbtn.addEventListener('click',(event)=>{

    console.log("btn working");
    if(search.value.toLowerCase()=="shimla"){
        console.log(search.value);
        mapBox.innerHTML=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54674.13522746133!2d77.12400169534264!3d31.07821466846596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e3e35d6e67%3A0x1f7e7ff6ff9f54b7!2sShimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1671120062782!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        mapBox.style.display="block";
    }
    else if(search.value.toLowerCase()=="kullu"){
        console.log(search.value);
        mapBox.innerHTML=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27081.861266898995!2d77.09378278265783!3d31.954584348581236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904f6a95c673edb%3A0x40f8c144f79ad609!2sKullu%2C%20Himachal%20Pradesh%20175101!5e0!3m2!1sen!2sin!4v1671123551160!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        mapBox.style.display="block";
    }
    else if(search.value.toLowerCase()=="dharamshala"){
        console.log(search.value);
        mapBox.innerHTML=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27004.274349447183!2d76.30165563311058!3d32.21677734324714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b50df65bd7311%3A0x3e08bdb100c6dc10!2sDharamshala%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1671124967550!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        mapBox.style.display="block";
    }
    else{
        mapBox.style.display="none";
    }

});

