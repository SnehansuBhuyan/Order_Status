 
var subscriptionId ;
subscriptionId = context.getVariable("subscriptions.subscriptionId");

if(subscriptionId == null || subscriptionId.length == 0) {
    
context.setVariable("errorflag", "true");
context.setVariable("code", "400");
context.setVariable("errordetailmsg", "Bad Request : Invalid subscriptionId");

}

