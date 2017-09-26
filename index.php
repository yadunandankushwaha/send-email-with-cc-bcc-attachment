<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Yadu - Auto Load Contents and Refresh Div Every 10 Seconds via Ajax, Jquery and PHP</title>

      
      

<!-- Required header files-->
<link href="css/style.css" rel="stylesheet" type="text/css">
<script type="text/javascript" language="javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" language="javascript" src="js/file_uploads.js"></script>
<script type="text/javascript" language="javascript" src="js/email_sender.js"></script>





</head>
<body>
<br />
<center>
<div style="font-family:Verdana, Geneva, sans-serif; font-size:24px;width:1080px;">Send Email with Cc, Bcc and File Attachment using Ajax, Jquery and PHP - Updated</div><br clear="all" /><br />













   
<!-- Code Begins -->
<div class="vpb_main_wrapper">

<form id="vasPLUS_Programming_Blog_Form" method="post" action="javascript:void(0);" enctype="multipart/form-data" autocomplete="off">


<div style="width:100px;float:left;padding:5px;padding-top:14px;font-family:Verdana, Geneva, sans-serif; font-size:11px; color:black;" align="left">To - Email:</div>
<div style="width:400px;float:left;padding:5px;" align="left"><input type="text" name="to" id="to" class="vpb_textAreaBoxInputs"></div><br clear="all">


<div style="width:100px;float:left;padding:5px;padding-top:14px;font-family:Verdana, Geneva, sans-serif; font-size:11px; color:black;" align="left">Email Cc:</div>
<div style="width:400px;float:left;padding:5px;" align="left"><input type="text" name="cc" id="cc" class="vpb_textAreaBoxInputs"></div><br clear="all">


<div style="width:100px;float:left;padding:5px;padding-top:14px;font-family:Verdana, Geneva, sans-serif; font-size:11px; color:black;" align="left">Email Bcc:</div>
<div style="width:400px;float:left;padding:5px;" align="left"><input type="text" name="bcc" id="bcc" class="vpb_textAreaBoxInputs"></div><br clear="all">


<div style="width:100px;float:left;padding:5px;padding-top:14px;font-family:Verdana, Geneva, sans-serif; font-size:11px; color:black;" align="left">From - Email:</div>
<div style="width:400px;float:left;padding:5px;" align="left"><input type="text" name="from" id="from" class="vpb_textAreaBoxInputs"></div><br clear="all">


<div style="width:100px;float:left;padding:5px;padding-top:14px;font-family:Verdana, Geneva, sans-serif; font-size:11px; color:black;" align="left">Email Subject:</div>
<div style="width:400px;float:left;padding:5px;" align="left"><input type="text" name="subject" id="subject" class="vpb_textAreaBoxInputs"></div><br clear="all">


<div style="width:100px;float:left;padding:5px;padding-top:8px;font-family:Verdana, Geneva, sans-serif; font-size:11px; color:black;" align="left">Email Message:</div>
<div style="width:400px;float:left;padding:5px;" align="left"><textarea name="message" id="message" class="vpb_textAreaBoxInputs" style="width:360px; height:150px;"></textarea></div><br clear="all">


<div style="width:100px;float:left;padding:5px;padding-top:14px;font-family:Verdana, Geneva, sans-serif; font-size:11px; color:black;" align="left">Attach File:</div>
<div style="width:400px;float:left;padding:5px;" align="left"><div class="vasplusfile_adds"><input type="file" name="attachment_file" id="attachment_file" style="opacity:0;-moz-opacity:0;filter:alpha(opacity:0);z-index:9999;width:90px;padding:5px;cursor:default;" /></div></div><br clear="all"><br clear="all">



<div style="width:110px;float:left;" align="left">&nbsp;</div>
<div style="width:400px;float:left;padding:5px;" align="left">
<input type="hidden" name="submitted" id="submitted" value="1" />
<input type="submit" class="vpb_general_button" value="Send Mail" onclick="vpb_send_email();"></div><br clear="all">

<div style="width:540px;float:left;" align="left"><div id="vpb_mailer_response" style="font-family:Verdana, Geneva, sans-serif; font-size:12px; color:black;" align="left"></div></div><br clear="all">

</form>

</div>

<!-- Code Ends -->


















<p style="padding-bottom:200px;">&nbsp;</p>
</center>
</body>
</html>