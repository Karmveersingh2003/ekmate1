import React from 'react'
import "./footer.css"
import { FaFacebookF,FaLinkedinIn ,FaTwitter,FaInstagram} from "react-icons/fa";
export default function Footer() {
  return (
   <>
   <footer class="footer">
  	 <div class="container-footer">
  	 	<div class="footer_row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="/about">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#FAQs">FAQ</a></li>
  	 				<li><a href="/contact">Contact Us</a></li>
  	 				<li><a href="/login">Login</a></li>
  	 				<li><a href="#">name 3</a></li>
  	 				<li><a href="#">name 4</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>head 4</h4>
  	 			<ul>
  	 				<li><a href="/">Home</a></li>
  	 				<li><a href="#">name2</a></li>
  	 				<li><a href="#">name3</a></li>
  	 				<li><a href="#">name4</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links-footer">
  	 				<a href="#"><i ><FaFacebookF/></i></a>
  	 				<a href="#"><i ><FaTwitter/></i></a>
  	 				<a href="#"><i><FaInstagram/></i></a>
  	 				<a href="#"><i><FaLinkedinIn/></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
   </>
  )
}
