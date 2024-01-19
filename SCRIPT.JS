var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname)
    {
        for(tablink of tablinks){
            tablink.classList.remove("Active-links");
        }

        for(tabcontent of tabcontents){
            tabcontent.classList.remove("Active-tabs");
        }
        event.currentTarget.classList.add("Active-links");
        document.getElementById(tabname).classList.add("Active-tabs"); 
    }

    // --------------SIDE-MENU------------------
    var sidemenu = document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }

    // ---------GOOGLE-SHEET-FORM-AUTO--DATA-FILL-----------


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzosqpaguVJ_7IGNtZxli3_CWYuYSOVZU_nGBuHaO5s5oExx8Q4eMP83D8kDp6Bv3hF/exec'
  const form = document.forms['submit-to-google-sheet']
  const message = document.getElementById("message")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        message.innerHTML = "message sent sucessfully"
        setTimeout(function(){
            message.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

