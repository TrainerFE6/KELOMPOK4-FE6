$(document).ready(function(){
    // contact us-tombol submit
    $("#formcontactus").submit(function(event){
        event.preventDefault();
        var nama = $("#nama").val();
        var email = $("#email").val();
        var message = $("#message").val();
        
        if(nama !== '' && email !== '' && message !== ''){
          alert("FORM SUBMITTED!");
        } else {
          alert("SORRY, DATA IS INCOMPLETE!!! PLEASE COMPLETE YOUR DATA");
        }
      });

    //   navbar-dropdown product
      $("#productnav").click(function(){
        $("#dropdownmenu").addClass("show");
      });
      $("#productnav").mouseenter(function(){
        $("#dropdownmenu").addClass("show");
      });
      $("#dropdownmenu").mouseleave(function(){
        $("#dropdownmenu").removeClass("show");
      });


    $('#checkout').submit(function(event){
      event.preventDefault();
      var cname = $("#cname").val();
      var ccnum = $("#ccnum").val();
      var expmonth = $('#expmonth').val();
      var expyear = $("#expyear").val();
      var cvv = $("#cvv").val(); 

      if(cname !== '' && ccnum !== '' && expmonth !== '' && expyear !== '' && cvv !== '') {
        alert("CHECKOUT SUBMITTED!");
      } else {
        alert("SORRY, DATA IS INCOMPLETE!!! PLEASE COMPLETE YOUR DATA");
      }
    });
});
