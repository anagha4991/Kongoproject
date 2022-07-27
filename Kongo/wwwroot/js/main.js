
//script for rooms box
    $(document).ready(function(){
        $('#show').click(function() {
          $('.menu').toggle("slide");
        });
        // Call global the function
        $('.t-datepicker').tDatePicker({
            // options here
        });
        $('#showform').hide();
        $(document).on("click","#applybuttonfor",function() {
            // alert("click bound to document listening for #test-element");
            var adults = $( "#adult-val" ).val();
            var children = $( "#children-val" ).val();
            var rooms = $( "#room-val" ).val();
            var guests = parseInt(adults) + parseInt(children);
            jQuery("#submitterroom").text(rooms);
            jQuery("#submitteguests").text(guests);
            $('.menu').hide("slide");
        });
        $(document).on("click","#cancelbuttonfor",function() {
            $('.menu').hide("slide");
        });
         $(document).on("click","#childrenagefetcher",function() {
             $('#showform').show();
            var lastField = $("#showform div:last");
            var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;
            var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
            fieldWrapper.data("idx", intId);
            var fName = $("<input type=\"text\" class=\"fieldname\" />");
            // var fType = $("<select class=\"fieldtype\"><option value=\"checkbox\">Checked</option><option value=\"textbox\">Text</option><option value=\"textarea\">Paragraph</option></select>");
            var fType = $("<select class=\"form-select\" aria-label=\"Default select example\"><option selected>Age</option><option value=\"0\">0</option<option value=\"1\">1</option><option value=\"2\">2</option>  </select>");
            var removeButton = $("<input type=\"button\" class=\"remove\" value=\"-\" />");
            removeButton.click(function() {
                $(this).parent().remove();
            });
            fieldWrapper.append(fName);
            fieldWrapper.append(fType);
            fieldWrapper.append(removeButton);
            $("#buildyourform").append(fieldWrapper);
        });

        // $("#childrenagefetcher").click(function() {
        //     var lastField = $("#buildyourform div:last");
        //     var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;
        //     var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
        //     fieldWrapper.data("idx", intId);
        //     var fName = $("<input type=\"text\" class=\"fieldname\" />");
        //     var fType = $("<select class=\"fieldtype\"><option value=\"checkbox\">Checked</option><option value=\"textbox\">Text</option><option value=\"textarea\">Paragraph</option></select>");
        //     var removeButton = $("<input type=\"button\" class=\"remove\" value=\"-\" />");
        //     removeButton.click(function() {
        //         $(this).parent().remove();
        //     });
        //     fieldWrapper.append(fName);
        //     fieldWrapper.append(fType);
        //     fieldWrapper.append(removeButton);
        //     $("#buildyourform").append(fieldWrapper);
        // });
        // $("#childrenagefetcher").click(function() {
        //     $("#yourform").remove();
        //     var fieldSet = $("<fieldset id=\"yourform\"><legend>Your Form</legend></fieldset>");
        //     $("#buildyourform div").each(function() {
        //         var id = "input" + $(this).attr("id").replace("field","");
        //         var label = $("<label for=\"" + id + "\">" + $(this).find("input.fieldname").first().val() + "</label>");
        //         var input;
        //         switch ($(this).find("select.fieldtype").first().val()) {
        //             case "checkbox":
        //                 input = $("<input type=\"checkbox\" id=\"" + id + "\" name=\"" + id + "\" />");
        //                 break;
        //             case "textbox":
        //                 input = $("<input type=\"text\" id=\"" + id + "\" name=\"" + id + "\" />");
        //                 break;
        //             case "textarea":
        //                 input = $("<textarea id=\"" + id + "\" name=\"" + id + "\" ></textarea>");
        //                 break;    
        //         }
        //         fieldSet.append(label);
        //         fieldSet.append(input);
        //     });
        //     $("body").append(fieldSet);
        // });
    });
// quantuty increase ans decrease
    var buttonPlus  = $(".qty-btn-plus");
    var buttonMinus = $(".qty-btn-minus");

    var incrementPlus = buttonPlus.click(function() {
    var $n = $(this)
    .parent(".qty-container")
    .find(".input-qty");
    $n.val(Number($n.val())+1 );
    });

    var incrementMinus = buttonMinus.click(function() {
    var $n = $(this)
    .parent(".qty-container")
    .find(".input-qty");
    var amount = Number($n.val());
    if (amount > 0) {
        $n.val(amount-1);
    }
    });
 
    // Add active class to the current button (highlight it)
    var header = document.getElementById("menubardiv");
    var btns = header.getElementsByClassName("menubars");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }

    var platform = document.getElementById("platformbars");
    var platformbtns = platform.getElementsByClassName("platform");
    for (var i = 0; i < platformbtns.length; i++) {
      platformbtns[i].addEventListener("click", function() {
      var platcurrent = document.getElementsByClassName("active-select");
      platcurrent[0].className = platcurrent[0].className.replace(" active-select", "");
      this.className += " active-select";
      });
    }
//date picker
    // $('input[name="checkin"]').daterangepicker();
    // $('input[name="checkout"]').daterangepicker();

    $(document).ready(function(){	
			

		if ($(window).width() < 1199) {
		  // mobile menu
		  $('.hamburger').click(function (event) {
			$(this).toggleClass('h-active');
			$('.main-nav').toggleClass('slidenav');
		  });

		  $('.header-home .main-nav ul li  a').click(function (event) {
			$('.hamburger').removeClass('h-active');
			$('.main-nav').removeClass('slidenav');
		  });
		}

		
		$(".main-nav .fl").on('click', function(event) {
		  var $fl = $(this);
		  $(this).parent().siblings().find('.submenu').slideUp();
		  $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");       
		  if($fl.hasClass('flaticon-plus')){
			$fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
		  }else{
			$fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
		  }
		  $fl.next(".submenu").slideToggle();
		});

        

	});	
