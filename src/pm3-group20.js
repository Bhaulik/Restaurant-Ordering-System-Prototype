<!-- 

window.onload = function() 
{
	if ( sessionStorage.getItem( 'orderTotal' ) != null )
	{
		document.getElementById('totalPrice').innerHTML = "$" + sessionStorage.getItem( 'orderTotal' );
	}
	
	generateOrder();
	generateQuantity();
}

function generateOrder()
{
	if ( sessionStorage.getItem( 'order' ) == null )
	{
		var order = new Array();
	}
}

function generateQuantity()
{	
	if ( location.href.indexOf("veggie-burger") > -1 )
	{
		if ( sessionStorage.getItem( 'vegburger' ) != null )
		{
			document.getElementById('veggieQuantity').innerHTML = sessionStorage.getItem( 'vegburger' );
		}
	}
	else if ( location.href.indexOf("chickenburger") > -1 )
	{
		if ( sessionStorage.getItem( 'chkburger' ) != null )
		{
			document.getElementById('chickenQuantity').innerHTML = sessionStorage.getItem( 'chkburger' );
		}
	}
	else if ( location.href.indexOf("cheeseburger") > -1 )
	{
		if ( sessionStorage.getItem( 'chzburger' ) != null )
		{
			document.getElementById('cheeseburgerQuantity').innerHTML = sessionStorage.getItem( 'chzburger' );
		}
	}
	else if ( location.href.indexOf("hamburger") > -1 )
	{
		if ( sessionStorage.getItem( 'hamburger' ) != null )
		{
			document.getElementById('hamburgerQuantity').innerHTML = sessionStorage.getItem( 'hamburger' );
		}
	}
	else if ( location.href.indexOf("fries") > -1 )
	{
		if ( sessionStorage.getItem( 'fries' ) != null )
		{
			document.getElementById('friesQuantity').innerHTML = sessionStorage.getItem( 'fries' );
		}
	}
}

function addToOrder( item, price )
{
	var currentOrder;
	var newOrder;
	
	if ( sessionStorage.getItem( 'order' ) == null )
	{
		sessionStorage.setItem( 'order', item );
	}
	else 
	{
		currentOrder = sessionStorage.getItem( 'order' );
		newOrder = currentOrder + ", " + item;
		
		sessionStorage.setItem( 'order', newOrder );
	}
	
	changeOrderTotal( price );
	changeQuantity( item, 1 );
}

function removeFromOrder( item, price )  
{	
	var newOrder;
	var stringSearch;
	var location;
	var found = false;
	
	if ( sessionStorage.getItem( 'order' ).search( item ) >= 0 )  
	{	
		if ( sessionStorage.getItem( 'order' ).search( item ) == 0 )
		{
			if ( sessionStorage.getItem( 'order' ).length == item.length )
			{
				newOrder = "";
			}
			else
			{
				newOrder = sessionStorage.getItem( 'order' ).substring( item.length + 2 );
			}
		}
		else
		{
			middleItem = item + ", ";
			
			if ( sessionStorage.getItem( 'order' ).search( middleItem ) > 0 )
			{
				location = sessionStorage.getItem( 'order' ).search( middleItem );
				newOrder =  sessionStorage.getItem( 'order' ).substring( 0, ( location ) ) + sessionStorage.getItem( 'order' ).substring( location + middleItem.length );
				
			}
			else
			{
				location = sessionStorage.getItem( 'order' ).search( item );
				newOrder =  sessionStorage.getItem( 'order' ).substring( 0, (location - 2) ) + sessionStorage.getItem( 'order' ).substring( location + item.length );
			}
		}
		
		sessionStorage.setItem( 'order', newOrder );
				
		changeOrderTotal( price);
		changeQuantity( item, -1 );
	}
}

function changeQuantity( item, amount )
{
	var initialQuantity;
	var newQuantity;
	
	if ( item == 'Hamburger' )
	{
		if ( sessionStorage.getItem( 'hamburger' ) != null )
		{
			initialQuantity = parseInt( sessionStorage.getItem( 'hamburger' ) );
			newQuantity = initialQuantity + amount;
			sessionStorage.setItem( 'hamburger', newQuantity );
		}
		else
		{
			sessionStorage.setItem( 'hamburger', amount );
		}
	
		document.getElementById("hamburgerQuantity").innerHTML = sessionStorage.getItem( 'hamburger' );
	}
	else if ( item == 'Cheeseburger' )
	{
		if ( sessionStorage.getItem( 'chzburger' ) != null )
		{
			initialQuantity = parseInt( sessionStorage.getItem( 'chzburger' ) );
			newQuantity = initialQuantity + amount;
			sessionStorage.setItem( 'chzburger', newQuantity );
		}
		else
		{
			sessionStorage.setItem( 'chzburger', amount );
		}
		
		document.getElementById("cheeseburgerQuantity").innerHTML = sessionStorage.getItem( 'chzburger' );
	}
	else if ( item == 'Veggie Burger' )
	{
		if ( sessionStorage.getItem( 'vegburger' ) != null )
		{
			initialQuantity = parseInt( sessionStorage.getItem( 'vegburger' ) );
			newQuantity = initialQuantity + amount;
			sessionStorage.setItem( 'vegburger', newQuantity );
		}
		else
		{
			sessionStorage.setItem( 'vegburger', amount );
		}
		
		document.getElementById("veggieQuantity").innerHTML = sessionStorage.getItem( 'vegburger' );
	}
	else if ( item == 'Chicken Burger' )
	{
		if ( sessionStorage.getItem( 'chkburger' ) != null )
		{
			initialQuantity = parseInt( sessionStorage.getItem( 'chkburger' ) );
			newQuantity = initialQuantity + amount;
			sessionStorage.setItem( 'chkburger', newQuantity );
		}
		else
		{
			sessionStorage.setItem( 'chkburger', amount );
		}
		
		document.getElementById("chickenQuantity").innerHTML = sessionStorage.getItem( 'chkburger' );
	}
	else if ( item == 'French Fries' )
	{
		if ( sessionStorage.getItem( 'fries' ) != null )
		{
			initialQuantity = parseInt( sessionStorage.getItem( 'fries' ) );
			newQuantity = initialQuantity + amount;
			sessionStorage.setItem( 'fries', newQuantity );
		}
		else
		{
			sessionStorage.setItem( 'fries', amount );
		}
		
		document.getElementById("friesQuantity").innerHTML = sessionStorage.getItem( 'fries' );
	}
}

function changeOrderTotal( price )  
{	
	var initialPrice; 
	var alteredPrice;
	
	if ( sessionStorage.getItem( 'orderTotal' ) != null )
	{
		initialPrice = parseInt( sessionStorage.getItem( 'orderTotal' ) );
	}
	else
	{
		initialPrice = 0;
	}
	
	alteredPrice = initialPrice + price;
	
	sessionStorage.setItem( 'orderTotal', alteredPrice );
	
	document.getElementById("totalPrice").innerHTML = "$" + sessionStorage.getItem('orderTotal');
}
-->