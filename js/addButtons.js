AFRAME.RegisterComponent("add-buttons", {
    init: function() {  
        var button1 = document.createElement("button")
        button1.innerHTML = "ORDER SUMMARY"
        button1.setAttribute("id, summary-button")
        button1.setAttribute("class, btn btn-warning")

        var button2 = document.createElement("button")
        button2.innerHTML = "ORDER NOW"
        button2.setAttribute("id, order-button")
        button2.setAttribute("class, btn btn-warning")
    }
})