({
    Add : function(component, event, helper) {
        var a = component.get("v.num1");
        var b = component.get("v.num2");
        var total = parseFloat(a) + parseFloat(b);
        component.set("v.total",total.toFixed(2));
        component.set("v.isAdd",true);
        component.set("v.isSub",false);
        component.set("v.isMul",false);
        component.set("v.isDiv",false);
    },
    
    Sub : function(component, event, helper) {
        var a = component.get("v.num1");
        var b = component.get("v.num2");
        var total = parseFloat(a) - parseFloat(b);
        component.set("v.total",total.toFixed(2));
        component.set("v.isAdd",false);
        component.set("v.isSub",true);
        component.set("v.isMul",false);
        component.set("v.isDiv",false);
    },
    
    Mul : function(component, event, helper) {
        var a = component.get("v.num1");
        var b = component.get("v.num2");
        var total = parseFloat(a) * parseFloat(b);
        component.set("v.total",total.toFixed(2));
        component.set("v.isAdd",false);
        component.set("v.isSub",false);
        component.set("v.isMul",true);
        component.set("v.isDiv",false);
    },
    
    Divi : function(component, event, helper) {
        var a = component.get("v.num1");
        var b = component.get("v.num2");
        if(b == 0){
            alert('Não pode dividir números por zero!');
        }
        else{
            var total = parseFloat(a) / parseFloat(b);
            
            component.set("v.total",total.toFixed(2));
            component.set("v.isAdd",false);
            component.set("v.isSub",false);
            component.set("v.isMul",false);
            component.set("v.isDiv",true);
        }
        },
            
            
            Clear : function(component, event, helper) {
                component.set("v.total",null);
                component.set("v.num1",null);
                component.set("v.num2",null);
                component.set("v.isAdd",null);
                component.set("v.isSub",null);
                component.set("v.isMul",null);
            }
    })
