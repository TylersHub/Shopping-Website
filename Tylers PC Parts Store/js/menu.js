let flag=getCookie("flag");
if (flag=="true")
{
  document.writeln("<a href='logoff.html'><span class='button'>Logoff</span></a>"       );
  document.writeln("<a href='home.html'> <span class='button'>Home</span> </a>"         );
  document.writeln("<a href='products.html'> <span class='button'>Products</span> </a>" );
  document.writeln("<a href='contact.html'> <span class='button'>Contact</span> </a>"   );
  document.writeln("<a href='about.html'> <span class='button'>About</span> </a>"       );
}
else
{
  document.writeln("<a href='login.html'><span class='button'>Login</span></a>"         );
  document.writeln("<a href='home.html'> <span class='button'>Home</span> </a>"         );
  document.writeln("<a href='products.html'> <span class='button'>Products</span> </a>" );
  document.writeln("<a href='contact.html'> <span class='button'>Contact</span> </a>"   );
  document.writeln("<a href='about.html'> <span class='button'>About</span> </a>"       );
}

function loadhomepage()
{window.location.href="home.html";}
function loadcartpage()
{window.location.href="cart.html";}
          

