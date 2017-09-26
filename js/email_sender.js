
//This function sends all emails
function vpb_send_email() 
{
	//Variables declaration
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var to = $('#to').val();
	var cc = $('#cc').val();
	var bcc = $('#bcc').val();
	var from = $('#from').val();
	var subject = $('#subject').val();
	var message = $('#message').val();
	var attachedfile = $('#attachment_file').val();
	$("#vpb_mailer_response").html('');
	
	//Validation process begins
	if( to == "" )
	{
		$("#vpb_mailer_response").html('<br clear="all"><div class="info">Please enter the email address of your recipient in the <b>To - Email</b> field to proceed. Thanks.</div>');
		$("#to").focus();
		return false;
	}
	else if( reg.test(to) == false )
	{
		$("#vpb_mailer_response").html('<br clear="all"><div class="info">Please enter a valid email address of your recipient in the <b>To - Email</b> field to proceed. Thanks.</div>');
		$("#to").focus();
		return false;
	}
	else if( cc != "" && reg.test(cc) == false )
	{
		$("#vpb_mailer_response").html('<br clear="all"><div class="info">Sorry, the email address you have provided for <b>Email Cc</b> is incorrect. <br>Please leave that field blank or enter a valid email address to proceed. Thanks.</div>');
		$("#cc").focus();
		return false;
	}
	else if( bcc != "" && reg.test(bcc) == false )
	{
		$("#vpb_mailer_response").html('<br clear="all"><div class="info">Sorry, the email address you have provided for <b>Email Bcc</b> is incorrect. <br>Please leave that field blank or enter a valid email address to proceed. Thanks.</div>');
		$("#bcc").focus();
		return false;
	}
	else if( from == "" )
	{
		$("#vpb_mailer_response").html('<br clear="all"><div class="info">Please enter your own email address in the <b>From - Email</b> field to proceed. Thanks.</div>');
		$("#from").focus();
		return false;
	}
	else if( reg.test(from) == false )
	{
		$("#vpb_mailer_response").html('<br clear="all"><div class="info">Please enter your own valid email address in the <b>From - Email</b> field to proceed. Thanks.</div>');
		$("#from").focus();
		return false;
	}
	else if( subject == "" )
	{
		$("#vpb_mailer_response").html('<br clear="all"><div class="info">Please enter the subject of your message in its field to proceed. Thanks.</div>');
		$("#subject").focus();
		return false;
	}
	else if( message == "" )
	{
		$("#vpb_mailer_response").html('<br clear="all"><div class="info">Please enter your message in the required field to go. Thanks.</div>');
		$("#message").focus();
		return false;
	}
	else
	{
		var dataString = "to=" + to + "&cc=" + cc + "&bcc=" + bcc + "&from=" + from + "&subject=" + subject + "&message=" + message + "&attachedfile=" + attachedfile;
		
		if(attachedfile == "")
		{
			$.ajax({
				type: "POST",
				url: "email_sender.php",
				data: dataString,
				cache: false,
				beforeSend: function() 
				{
					$("#vpb_mailer_response").html('');
					$("#vpb_mailer_response").html('<br clear="all"><div style="font-family: Verdana, Geneva, sans-serif; font-size:12px; color:black; float:left; padding-left:110px;" align="center">Please wait <img src="images/loadings.gif" align="absmiddle" alt="Sending...." title="Sending...."/></div><br clear="all"><br clear="all">');
				},
				success: function(response)
				{
					var response_brought = response.indexOf('vpb_sent');
					if (response_brought != -1) 
					{
						$('#to').val('');
						$('#cc').val('');
						$('#bcc').val('');
						$('#from').val('');
						$('#subject').val('');
						$('#message').val('');
						$("#vpb_mailer_response").hide().fadeIn('fast').html(response);
					}
					else
					{
						$("#vpb_mailer_response").hide().fadeIn('fast').html(response);
					}
				}
			});
		}
		else
		{
			$("#vasPLUS_Programming_Blog_Form").vPB({
				url: 'email_sender.php?' + dataString,
				beforeSubmit: function() 
				{
					$("#vpb_mailer_response").html('');
					$("#vpb_mailer_response").html('<br clear="all"><div style="font-family: Verdana, Geneva, sans-serif; font-size:12px; color:black; float:left; padding-left:110px;" align="center">Please wait <img src="images/loadings.gif" align="absmiddle" alt="Sending...." title="Sending...."/></div><br clear="all"><br clear="all">');
				},
				success: function(response) 
				{
					var response_brought = response.indexOf('vpb_sent');
					if (response_brought != -1) 
					{
						$('#to').val('');
						$('#cc').val('');
						$('#bcc').val('');
						$('#from').val('');
						$('#subject').val('');
						$('#message').val('');
						$("#vpb_mailer_response").hide().fadeIn('fast').html(response);
					}
					else
					{
						$("#vpb_mailer_response").hide().fadeIn('fast').html(response);
					}
				}
			}).submit();
		}
	}
}