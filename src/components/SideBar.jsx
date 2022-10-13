import React from 'react'
import logo from '../assets/images/logo-GT.png'
import '../assets/css/app.css'
import { Link } from 'react-router-dom'



const SideBar = () => {
  return (
	
    /* <!-- Sidebar --> */

		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
	

			{/* <!-- Sidebar - Brand --> */}
			<a classNameName="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={logo} alt="Digital House" />
				</div>
			</a>

			{/* <!-- Divider --> */}

			<hr className="sidebar-divider my-0" />

			{/* <!-- Nav Item - Dashboard --> */}

			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - GlobalTech</span></a>
			</li>

			{/* <!-- Divider --> */}

			<hr className="sidebar-divider" />

		{/* <!-- Heading --> */}

			<div className="sidebar-heading">Actions</div>

			{/* <!-- Nav Item - Pages --> */}

			<li className="nav-item">
				<Link className="nav-link" to='/Products'>Productos</Link>
					<i className="fas fa-fw fa-table"></i>
					
			</li>

			{/* <!-- Nav Item - Charts --> */}

			<li className="nav-item">
				<Link className="nav-link" to='/Users'>Usuarios</Link>
					<i className="fas fa-fw fa-table"></i>
					
			</li>

			{/* <!-- Nav Item - Tables --> */}

			{/* <li className="nav-item">
				<Link className="nav-link" to='/categorias'>Categorias</Link>
					<i className="fas fa-fw fa-table"></i>
					
			</li> */}

			{/* <!-- Divider --> */}

			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
  )
}

export default SideBar