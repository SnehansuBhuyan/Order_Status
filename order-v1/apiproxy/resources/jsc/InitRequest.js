
var requestContent = context.getVariable("request.content");

var orderId ;
orderId = context.getVariable("orders.orderId");
context.setVariable("orderId", orderId);

var jsonObject= JSON.parse(requestContent); 
var subscriptionId;
subscriptionId = jsonObject.subscriptionId;
context.setVariable("subscriptionId", subscriptionId);
context.setVariable("data", requestContent);

if(orderId == null || orderId.length == 0) {
    
context.setVariable("errorflag", "true");
context.setVariable("code", "400");
context.setVariable("errordetailmsg", "Bad Request : Invalid OrderId");

}