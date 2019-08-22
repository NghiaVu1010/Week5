"use strict";

function getCategories() {
    $("#categoryList").empty();

    // Grab data from categories
    $.getJSON("/api/categories/", (categories) => {
        // Loop through each category
        $.each(categories, (index, category) => {
            $("#categoryList").append($("<a />")
            .text(category.Category)
            .attr("class", "dropdown-item")
            .attr("href", "#")
            .on("click", (e) => {
                e.preventDefault();
                $("#categoryName").text(category.Category);
                getProducts(category.Value);
            }));
        });
        $("#categoryContainer").show();
    });
}

function getProducts(category) {
    $("#productCard").hide();
    $("#productsList").html("");

    $.getJSON(`/api/products/bycategory/${category}`, (products) => {
        $.each(products, (index, product) => {
            $("#productsList").append($("<li />")
            .text(product.ProductName)
            .on("click", (e) => {
                e.preventDefault();
                //console.log(product);
                getProduct(product.ProductID);
            }));
        });
        $("#productsContainer").show();
    });
}

function getProduct(productId) {
    //console.log(productId);

    $.getJSON(`/api/products/${productId}`, (product) => {
        $("#cardTitle").html("Product ID: " + product.ProductID);
        $("#cardText1").html(product.ProductName);
        $("#cardText2").html("$" + Number(product.UnitPrice).toFixed(2));
        $("#productCard").show();
    });
}

$(function() {
    $("#viewItemsBtn").on("click", () => {
        getCategories();

        //$("#viewItemsBtn").prop("disabled", true);
        
        $("#robPic").hide();
        //$("#viewItemsBtn").hide();
    })

    $("#homeBtn").on("click", () => {
        $("#robPic").show();
        $("#categoryContainer").hide();
    })
});