class Catalog
{
	constructor()
	{
		this.products=
		[
			{id:1,name:"NVIDIA Graphics Card", code:"NVIDIAGPU",  image:"images/NVIDIAGPU.png",   description:"This is a powerful graphics processing unit which is widely used in various applications, including gaming, scientific research, and artificial intelligence. This NVIDIA Graphics card offers high-performance computing capabilities, enabling fast and realistic rendering of graphics, efficient parallel processing, and accelerated deep learning tasks. ",	price:699.99},
			{id:2,name:"AMD Graphics Card",    code:"AMDGPU",     image:"images/AMDGPU.png",	  description:"The AMD graphics processing unit known for its exceptional performance and competitive pricing, these units are widely used in gaming, content creation, and professional applications. AMD cards employ innovative architectures and advanced features to deliver high-quality visuals, smooth gameplay, and efficient computing performance. ",					price:649.99},
			{id:3,name:"HyperX 16GB RAM",      code:"16GBRAM",    image:"images/16GBRAM.png",     description:" A high-performance memory module designed by HyperX. Built with gamers and power users in mind, this RAM module offers increased system responsiveness and multitasking capabilities. With its 16GB capacity, it provides ample memory for smooth performance across various demanding applications, including gaming, video editing, and content creation. ",		price:79.99},
			{id:4,name:"Corsair 32GB RAM", 	   code:"32GBRAM",    image:"images/32GBRAM.png",     description:"This is a high-capacity memory module offered by Corsair's Vengeance series. Designed for enthusiasts and professionals, this RAM module provides a significant boost to system performance and multitasking capabilities. With its generous 32GB capacity, it offers ample memory for demanding applications such as video editing, 3D rendering, gaming. ",		price:129.99},
			{id:5,name:"Intel CPU",   		   code:"INTELCPU",   image:"images/INTELCPU.png",    description:"An Intel central processing unit is a powerful processor manufactured by Intel Corporation. Known for their strong performance and reliability, Intel CPUs are widely used in various computing applications. Intel CPUs are built using advanced architectures and cutting-edge technologies, resulting in efficient and high-performing processors. ",				price:399.99},
			{id:6,name:"AMD CPU",   		   code:"AMDCPU",     image:"images/AMDCPU.png",	  description:"An AMD central processing unit is a powerful processor, Renowned for their high-performance and competitive pricing, AMD CPUs offer exceptional processing power for various computing needs. AMD CPUs are designed with advanced architectures and innovative technologies, delivering good performance, efficient power consumption, and thermal management. ",	price:299.99},
			{id:7,name:"Samsung SSD",   	   code:"SAMSUNGSSD", image:"images/SAMSUNGSSD.png",  description:"A high-performance storage device manufactured by Samsung Electronics. Designed to replace traditional hard drives, Samsung SSDs offer significant improvements in speed, reliability, and power efficiency. These SSDs utilize flash memory technology, resulting in fast data access and transfer speeds, reduced boot time, and improved system responsiveness. ",price:99.99},
			{id:8,name:"PNY SSD",   		   code:"PNYSSD",     image:"images/PNYSSD.png",	  description:"A PNY solid state drive manufactured by PNY Technologies. Designed to deliver reliable performance and high-speed data storage, PNY SSDs offer an efficient solution for upgrading your storage capacity. PNY SSDs employ solid-state technology, enabling fast boot times, quick application loading, and overall system responsiveness compared to hard drives. ", price:89.99},
			{id:9,name:"ROG Power Supply",     code:"ROGPSU",     image:"images/ROGPSU.png",	  description:"An ROG power supply unit is a high-quality unit designed by ASUS. Engineered specifically for gaming and enthusiast systems, an ROG PSU delivers stable and efficient power to your computer components. ROG PSUs are built with premium components and adhere to strict quality standards to ensure reliable and consistent power delivery. ",						price:74.99},
			{id:10,name:"EVGA Power Supply",   code:"EVGAPSU",    image:"images/EVGAPSU.png",	  description:"A high-quality unit, EVGA power supplies are known for their exceptional performance and reliability, EVGA PSUs are trusted by gamers, enthusiasts, and professionals alike. EVGA PSUs are designed with premium components and advanced technologies to deliver stable and efficient power to your computer components. ",											price:114.99},
		];
	}
	getProducts(){return this.products;}
	getItem(code)
	{
		for (let i=0; i<this.products.length; i+=1)
		{
			if(this.products[i].code==code) return this.products[i];
		} 
		return null;
	}
	findItem(code)
	{
		for (let i=0; i<this.products.length; i+=1)
		{
			if(this.products[i].code==code) return true;
		} 
		return false;
	}
}

class ItemOrder 
{
	constructor(item) {this.item=item;this.numItems=1;}
	getItem(){return this.item;}
	setItem(item){this.item = item;}
	getNumItems(){return this.numItems;}
	setNumItems(n){this.numItems = n;}
	getItemId(){return((this.getItem()).id);}
	getItemCode(){return((this.getItem()).code);}
	getItemName(){return((this.getItem()).name);}
	getItemImage(){return ((this.getItem()).image); }
	getDescription(){return((this.getItem()).description);}
	getUnitCost(){return((this.getItem()).price).toFixed(2);}
	incrementNumItems(){this.setNumItems(parseInt(this.getNumItems()) + 1);}
	cancelOrder(){this.setNumItems(0);}
	getTotalCost(){return(parseInt(this.getNumItems()) * parseFloat(this.getUnitCost())).toFixed(2);} 
}

class ShoppingCart
{
	constructor(userid) 
	{
		this.userid=userid;
		this.itemsOrdered=[];
		this.loadCart();
	}
	getItemImage(id)
	{
		alert("In getItemImage:"+this.itemsOrdered.length);
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			alert(item.getItemId());
			if(item.getItemId()==id)
			{
				alert("Found Item:");
				return (this.itemsOrdered[i]).getItemImage();
			}
		}
		return '';
	}
	getItemsOrdered() {return this.itemsOrdered ;}
	printShoppingCart()
	{
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			alert("id="+item.getItemId()+ ": desc="+item.getDescription()+" qty="+item.getNumItems());
		}
	}
	addItem(itemCode) 
	{
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			if(item.getItemCode()==itemCode)
			{
				(this.itemsOrdered[i]).incrementNumItems();
				this.storeCart();
				return;
			}
		}	
		let catalog=new Catalog();
		let newOrder = new ItemOrder(catalog.getItem(itemCode));
		this.itemsOrdered.push(newOrder);
		this.storeCart();
	}
	setNumOrdered(itemCode,numOrdered) 
	{ 
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			if(item.getItemCode()==itemCode)
			{
				if(numOrdered<=0)
				{
					this.itemsOrdered.splice(i,1);
					this.storeCart();
					return;
				}
				else
				{
					(this.itemsOrdered[i]).setNumItems(numOrdered);
					this.storeCart();
					return;
				}
			}
		}
		let catalog=new Catalog();
		let newOrder = new ItemOrder(catalog.getItem(itemCode));
		newOrder.setNumItems(numOrdered);
		this.itemsOrdered.push(newOrder);
		this.storeCart();
	}
	getTotalCost()
	{
		let total=0;
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			total+=parseFloat(item.getTotalCost());
		}
		return total.toFixed(2);
	}
	addTax()
	{
		let total=parseFloat(this.getTotalCost());
		return (total*.1+total).toFixed(2);
	}

	addShipping(shipcost=0)
	{
	  return(parseFloat(this.addTax())+parseFloat(shipcost)).toFixed(2);
	}
	
	emptyShoppingCart()
	{
	    this.itemsOrdered=[];
	    var usercart=this.userid+"cart";  
	    setCookie(usercart,"",-1);
	}
	storeCart()
	{
		var usercart=this.userid+"cart";
		var cart="";
		var atleastone=false;
		let items=this.getItemsOrdered();
		for(let i=0;i<items.length;i++)
		{
			var qty=parseInt(items[i].getNumItems());
			if(qty>=1)
			{
				cart=cart+(items[i].getItemCode()+":"+qty+"@");
				atleastone=true;
			}
		}
		if(atleastone)
		{
			cart=cart.substring(0,cart.length-1);
			setCookie(usercart,cart,30);
		}
		else setCookie(usercart,"",-1);
	}
	loadCart()
	{
		let cartname=this.userid+"cart";
		let cart=getCookie(cartname);
		if(cart != null)
		{
			var str=cart.split("@");
			for(var i=0;i<str.length;i++)
			{
				var item=str[i].split(":");
				var cookiename=item[0];
				var cookievalue=item[1];
				this.setNumOrdered(cookiename,cookievalue);
			}		
		}
	}
}
