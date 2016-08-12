
context.setVariable("response.content", context.getVariable("data"));

var data1;
context.setVariable("data1", context.getVariable("data")); 
 
var subscriptionId ;
subscriptionId = context.getVariable("subscriptions.subscriptionId");
context.setVariable("subscriptionId", subscriptionId);
if (context.getVariable("data") == null)
{
  
context.setVariable("errorflag", "true");
context.setVariable("code", "404"); 
context.setVariable("errordetailmsg", "Data not Found");
}