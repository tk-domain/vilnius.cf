$(function(){$("#check-document-status").click(function(e){registrationNumber=$("#document-number").val().replace(/\s/g,"").replace(/(<([^>]+)>)/gi,""),$("#document-number").val(registrationNumber);var t=grecaptcha.getResponse();""!=registrationNumber&&$("#document-number").val().length>6&&""!=t?$.ajax({url:ajaxurl+"/document-status-check/check-status.php",dataType:"html",method:"GET",data:{registrationNumber:registrationNumber,recaptcha:t},beforeSend:function(){$("#document-status-result-iner").html(""),$("#loader").show()},success:function(e){$("#document-status-result-iner").html(e),grecaptcha.reset()},complete:function(e){$("#loader").hide()}}):""==t?$("#document-status-result-iner").html('<p class="required">Prašome pavirtinti, kad nesate robotas</p>'):$("#document-status-result-iner").html('<p class="required">Prašome įvesti teisingą registracijos numerį</p>'),e.preventDefault()}),$("#documentStatusModal").on("hidden.bs.modal",function(){$("#document-status-result-iner").html(""),$("#document-number").val("")})});