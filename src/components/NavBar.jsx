import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Student</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="AddStudent.jsx">Add Student</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="SearchStudent.jsx">Search</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="DeleteStudent.jsx">Delete</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="ViewallStudent.jsx">View All</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar