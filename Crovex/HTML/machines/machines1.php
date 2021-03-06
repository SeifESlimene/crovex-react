<!-- =========================================================
* Argon Dashboard PRO v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 -->
 <?php
session_start();
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Start your development with a Dashboard for Bootstrap 4.">
  <meta name="author" content="Creative Tim">
  <title>Argon Dashboard PRO - Premium Bootstrap 4 Admin Template</title>
  <!-- Favicon -->
  <link rel="icon" href="../../assets/img/brand/favicon.png" type="image/png">
  <!-- Fonts -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700">
  <!-- Icons -->
  <link rel="stylesheet" href="../../assets/vendor/nucleo/css/nucleo.css" type="text/css">
  <link rel="stylesheet" href="../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" type="text/css">
  <!-- Page plugins -->
  <link rel="stylesheet" href="../../assets/vendor/datatables.net-bs4/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="../../assets/vendor/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css">
  <link rel="stylesheet" href="../../assets/vendor/datatables.net-select-bs4/css/select.bootstrap4.min.css">
  <!-- Argon CSS -->
  <link rel="stylesheet" href="../../assets/css/argon.css?v=1.1.0" type="text/css">
</head>
<!-- =================================================================================   Modal   ============================================================================================ -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
  <!--<div class="modal-dialog modal-lg">-->
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Machines</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">

            <!--Form-->
            <form action="machinesinsertcode.php" method="POST">

            <div class="container">
          

              <div class="col-md-14">
                <div class="form-group">
                <input type="text" name="brand" class="form-control" placeholder="Brand">
                </div>
              </div>

              <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                <input type="text" name="machine_type" class="form-control" placeholder="Machine Type">
                </div>
              </div>


              <div class="col-md-6">
                <div class="form-group">
                <input type="text" name="diameter" class="form-control" placeholder="Diameter">
                </div>
              </div>
              </div>

              <div class="w-100"></div>            
                  
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                <input type="text" name="gauge" class="form-control" placeholder="gauge">
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                <input type="text" name="feeders" class="form-control" placeholder="Feeders">
                </div>
              </div>
            </div>
                        
            <div class="w-100"></div> 

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                <input type="number" name="needles" class="form-control" placeholder="Needles">
                </div>
              </div>
              
              <div class="col-md-6">
                <div class="form-group">
                <input type="number" name="camtracks" class="form-control" placeholder="Cam Tracks">
                </div>
              </div>
            </div>

            <div class="w-100"></div> 

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                <input type="number" name="belt" class="form-control" placeholder="Belt(mm)">
                </div>
              </div>
              
              <div class="col-md-6">
                <div class="form-group">
                <input type="number" name="machine_nb" class="form-control" placeholder="Machine Number">
                </div>
              </div>
            </div>

           
           
            </div>
            </div>


            <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="Submit" name="insertdata" class="btn btn-primary">Save Data</button>
        </div>
    </form>
      </div>
    </div>
  </div>
<!-- ======================================================================================================================================================================================== -->
<!-- =================================================================================   Edit Modal   ======================================================================================= -->

<!-- Modal -->
<div class="modal fade" id="editmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
  <!--<div class="modal-dialog modal-lg">-->
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Machine</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">

            <!--Form-->
            <form action="machinesupdatecode.php" method="POST">
            <input type="hidden" name="update_id" id="update_id">
              

            <div class="container">

            <div class="col-md-14">
                <div class="form-group">
                <input type="text" name="brand" id="brand" class="form-control" placeholder="Brand">
                </div>
              </div>
          
              <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                <input type="text" name="machine_type" id="machine_type" class="form-control" placeholder="Machine Type">
                </div>
              </div>


              <div class="col-md-6">
                <div class="form-group">
                <input type="text" name="diameter" id="diameter" class="form-control" placeholder="Diameter">
                </div>
              </div>
              </div>

              <div class="w-100"></div>            
                  
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                <input type="text" name="gauge" id= "gauge" class="form-control" placeholder="gauge">
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                <input type="text" name="feeders" id= "feeders" class="form-control" placeholder="Feeders">
                </div>
              </div>
            </div>
                        
            <div class="w-100"></div> 

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                <input type="text" name="needles" id= "needles" class="form-control" placeholder="Needles">
                </div>
              </div>
              
              <div class="col-md-6">
                <div class="form-group">
                <input type="text" name="camtracks" id= "camtracks" class="form-control" placeholder="Cam Tracks">
                </div>
              </div>
            </div>

            <div class="w-100"></div> 

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                <input type="text" name="belt" id="belt" class="form-control" placeholder="Belt">
                </div>
              </div>

                  

              <div class="col-md-6">
                <div class="form-group">
                <input type="text" name="machine_nb" id= "machine_nb" class="form-control" placeholder="Machine Number">
                </div>
              </div>
            </div>                      
          </div>
         </div>


        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="Submit" name="updatedata" class="btn btn-primary">Update Data</button>
        </div>
    </form>
      </div>
    </div>
  </div>
<!-- ======================================================================================================================================================================================== -->
<!-- ==================================================================================     Delete Modal     ================================================================================ -->
<!-- Delete POP FORM (Bootstrap Modal) -->

  <div class="modal fade" id="deletemodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete Data From Stock</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">

            <!--Form-->
            <form action="machinesdeletecode.php" method="POST">
            <div class="modal-body">
                <input type="hidden" name="delete_id" id="delete_id">
                <h4> Do you want to Delete this Data ? </h4>
                         
              
            </div>
        </div>


        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal"> No </button>
          <button type="Submit" name="deletedata" class="btn btn-primary"> Yes Delete it. </button>
        </div>
    </form>
      </div>
    </div>
  </div>
  <!-- ======================================================================================================================================================================================= -->
<body>
  <!-- Sidenav -->
  <nav class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div class="scrollbar-inner">
      <!-- Brand -->
      <div class="sidenav-header d-flex align-items-center">
        <a class="navbar-brand" href="../../index.php">
          <img src="../../assets/img/brand/blue.png" class="navbar-brand-img" alt="...">
        </a>
        <div class="ml-auto">
          <!-- Sidenav toggler -->
          <div class="sidenav-toggler d-none d-xl-block" data-action="sidenav-unpin" data-target="#sidenav-main">
            <div class="sidenav-toggler-inner">
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-inner">
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
          <!-- Nav items -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#navbar-dashboards" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-dashboards">
                <i class="ni ni-shop text-primary"></i>
                <span class="nav-link-text">Dashboards</span>
              </a>
              <div class="collapse" id="navbar-dashboards">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <a href="../../index.php" class="nav-link">Dashboard</a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/dashboards/alternative.php" class="nav-link">Alternative</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#navbar-examples" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-examples">
                <i class="ni ni-ungroup text-orange"></i>
                <span class="nav-link-text">Examples</span>
              </a>
              <div class="collapse" id="navbar-examples">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <a href="../../pages/examples/login.php" class="nav-link">Login</a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/examples/register.php" class="nav-link">Register</a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/examples/lock.php" class="nav-link">Lock</a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/examples/timeline.php" class="nav-link">Timeline</a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/examples/profile.php" class="nav-link">Profile</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#navbar-components" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-components">
                <i class="ni ni-ui-04 text-info"></i>
                <span class="nav-link-text">Components</span>
              </a>
              <div class="collapse" id="navbar-components">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <a href="../../pages/components/buttons.php" class="nav-link">Buttons</a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/components/cards.php" class="nav-link">Cards</a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/components/grid.php" class="nav-link">Grid</a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/components/notifications.php" class="nav-link">Notifications</a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/components/icons.php" class="nav-link">Icons</a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/components/typography.php" class="nav-link">Typography</a>
                  </li>
                  <li class="nav-item">
                    <a href="#navbar-multilevel" class="nav-link" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="navbar-multilevel">Multi level</a>
                    <div class="collapse show" id="navbar-multilevel" style="">
                      <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                          <a href="#!" class="nav-link ">Third level menu</a>
                        </li>
                        <li class="nav-item">
                          <a href="#!" class="nav-link ">Just another link</a>
                        </li>
                        <li class="nav-item">
                          <a href="#!" class="nav-link ">One last link</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#navbar-forms" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-forms">
                <i class="ni ni-single-copy-04 text-pink"></i>
                <span class="nav-link-text">Forms</span>
              </a>
              <div class="collapse" id="navbar-forms">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <a href="../../pages/forms/elements.php" class="nav-link">Elements</a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/forms/components.php" class="nav-link">Components</a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/forms/validation.php" class="nav-link">Validation</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#navbar-Storage" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-Storage">
                <i class="ni ni-align-left-2 text-default"></i>
                <span class="nav-link-text">Storage</span>
              </a>
              <div class="collapse" id="navbar-Storage">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <a href="../../pages/Storage/tables.php" class="nav-link">Table</a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/Storage/yarnstock.php" class="nav-link">Yarn Stock</a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/Storage/fabricstock.php" class="nav-link">Fabric Stock</a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/Storage/orders.php" class="nav-link">Orders</a>
                  </li>
                </ul>
              </div>
            </li>


            <li class="nav-item">
              <a class="nav-link" href="#navbar-profiles" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-profiles">
                <i class="ni ni-single-02 text-yellow"></i>
                <span class="nav-link-text">Profiles</span>
              </a>
              <div class="collapse" id="navbar-profiles">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <a href="../../pages/profiles/users.php" class="nav-link">Users</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#navbar-settings" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-settings">
                <i class="ni ni-settings-gear-65"></i>
                <span class="nav-link-text">Settings</span>
              </a>
              <div class="collapse" id="navbar-settings">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <a href="../../pages/settings/settings.php" class="nav-link">Settings</a>
                  </li>
                </ul>
              </div>
            </li> 
            <li class="nav-item">
              <a class="nav-link active" href="#navbar-machines" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="navbar-machines">
              <i class="ni ni-atom text-green"></i>
                <span class="nav-link-text">Machines</span>
              </a>
              <div class="collapse show" id="navbar-machines">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <a href="../../pages/machines/machines.php" class="nav-link">Machines</a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/machines/sparepart.php" class="nav-link">Sparepart</a>
                  </li>
                </ul>
              </div>
            </li> 
            
            <!--               
            <li class="nav-item">
              <a class="nav-link" href="#navbar-maps" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-maps">
                <i class="ni ni-map-big text-primary"></i>
                <span class="nav-link-text">Maps</span>
              </a>
              <div class="collapse" id="navbar-maps">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <a href="../../pages/maps/google.html" class="nav-link">Google</a>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/maps/vector.html" class="nav-link">Vector</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../../pages/widgets.html">
                <i class="ni ni-archive-2 text-green"></i>
                <span class="nav-link-text">Widgets</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../../pages/charts.html">
                <i class="ni ni-chart-pie-35 text-info"></i>
                <span class="nav-link-text">Charts</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../../pages/calendar.html">
                <i class="ni ni-calendar-grid-58 text-red"></i>
                <span class="nav-link-text">Calendar</span>
              </a>
            </li>
-->
          </ul>
          <!-- Divider -->
          <hr class="my-3">
          <!-- Heading -->
          <h6 class="navbar-heading p-0 text-muted">Documentation</h6>
          <!-- Navigation -->
          <ul class="navbar-nav mb-md-3">
            <li class="nav-item">
              <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html" target="_blank">
                <i class="ni ni-spaceship"></i>
                <span class="nav-link-text">Getting started</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html" target="_blank">
                <i class="ni ni-palette"></i>
                <span class="nav-link-text">Foundation</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html" target="_blank">
                <i class="ni ni-ui-04"></i>
                <span class="nav-link-text">Components</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/plugins/charts.html" target="_blank">
                <i class="ni ni-chart-pie-35"></i>
                <span class="nav-link-text">Plugins</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <!-- Main content -->
  <div class="main-content" id="panel">
    <!-- Topnav -->
    <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Search form -->
          <form class="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
            <div class="form-group mb-0">
              <div class="input-group input-group-alternative input-group-merge">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-search"></i></span>
                </div>
                <input class="form-control" placeholder="Search" type="text">
              </div>
            </div>
            <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </form>
          <!-- Navbar links -->
          <ul class="navbar-nav align-items-center ml-md-auto">
            <li class="nav-item d-xl-none">
              <!-- Sidenav toggler -->
              <div class="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                <div class="sidenav-toggler-inner">
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                </div>
              </div>
            </li>
            <li class="nav-item d-sm-none">
              <a class="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
                <i class="ni ni-zoom-split-in"></i>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ni ni-bell-55"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden">
                <!-- Dropdown header -->
                <div class="px-3 py-3">
                  <h6 class="text-sm text-muted m-0">You have <strong class="text-primary">13</strong> notifications.</h6>
                </div>
                <!-- List group -->
                <div class="list-group list-group-flush">
                  <a href="#!" class="list-group-item list-group-item-action">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <!-- Avatar -->
                        <img alt="Image placeholder" src="../../assets/img/theme/team-1.jpg" class="avatar rounded-circle">
                      </div>
                      <div class="col ml--2">
                        <div class="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 class="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div class="text-right text-muted">
                            <small>2 hrs ago</small>
                          </div>
                        </div>
                        <p class="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                      </div>
                    </div>
                  </a>
                  <a href="#!" class="list-group-item list-group-item-action">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <!-- Avatar -->
                        <img alt="Image placeholder" src="../../assets/img/theme/team-2.jpg" class="avatar rounded-circle">
                      </div>
                      <div class="col ml--2">
                        <div class="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 class="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div class="text-right text-muted">
                            <small>3 hrs ago</small>
                          </div>
                        </div>
                        <p class="text-sm mb-0">A new issue has been reported for Argon.</p>
                      </div>
                    </div>
                  </a>
                  <a href="#!" class="list-group-item list-group-item-action">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <!-- Avatar -->
                        <img alt="Image placeholder" src="../../assets/img/theme/team-3.jpg" class="avatar rounded-circle">
                      </div>
                      <div class="col ml--2">
                        <div class="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 class="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div class="text-right text-muted">
                            <small>5 hrs ago</small>
                          </div>
                        </div>
                        <p class="text-sm mb-0">Your posts have been liked a lot.</p>
                      </div>
                    </div>
                  </a>
                  <a href="#!" class="list-group-item list-group-item-action">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <!-- Avatar -->
                        <img alt="Image placeholder" src="../../assets/img/theme/team-4.jpg" class="avatar rounded-circle">
                      </div>
                      <div class="col ml--2">
                        <div class="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 class="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div class="text-right text-muted">
                            <small>2 hrs ago</small>
                          </div>
                        </div>
                        <p class="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                      </div>
                    </div>
                  </a>
                  <a href="#!" class="list-group-item list-group-item-action">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <!-- Avatar -->
                        <img alt="Image placeholder" src="../../assets/img/theme/team-5.jpg" class="avatar rounded-circle">
                      </div>
                      <div class="col ml--2">
                        <div class="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 class="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div class="text-right text-muted">
                            <small>3 hrs ago</small>
                          </div>
                        </div>
                        <p class="text-sm mb-0">A new issue has been reported for Argon.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <!-- View all -->
                <a href="#!" class="dropdown-item text-center text-primary font-weight-bold py-3">View all</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ni ni-email-83"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default dropdown-menu-right">
                <div class="row shortcuts px-4">
                  <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-red">
                      <i class="ni ni-calendar-grid-58"></i>
                    </span>
                    <small>Calendar</small>
                  </a>
                  <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-orange">
                      <i class="ni ni-email-83"></i>
                    </span>
                    <small>Email</small>
                  </a>
                  <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-info">
                      <i class="ni ni-credit-card"></i>
                    </span>
                    <small>Payments</small>
                  </a>
                  <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-green">
                      <i class="ni ni-books"></i>
                    </span>
                    <small>Reports</small>
                  </a>
                  <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-purple">
                      <i class="ni ni-pin-3"></i>
                    </span>
                    <small>Maps</small>
                  </a>
                  <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-yellow">
                      <i class="ni ni-basket"></i>
                    </span>
                    <small>Shop</small>
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav align-items-center ml-auto ml-md-0">
            <li class="nav-item dropdown">
              <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="media align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-5.jpg">
                  </span>
                  <div class="media-body ml-2 d-none d-lg-block">
                    <span class="mb-0 text-sm  font-weight-bold"></span>
                  
                  <?php 
                  echo $_SESSION['email'];
                  ?>

                  </div>
                </div>
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <div class="dropdown-header noti-title">
                  <h6 class="text-overflow m-0">Welcome!</h6>
                </div>
                <a href="./pages/examples/profile.php" class="dropdown-item">
                  <i class="ni ni-single-02 text-yellow"></i>
                  <span>My profile</span>
                </a>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-settings-gear-65"></i>
                  <span>Settings</span>
                </a>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-calendar-grid-58 text-green"></i>
                  <span>Activity</span>
                </a>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-support-16 text-blue"></i>
                  <span>Support</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="./pages/examples/login.php" class="dropdown-item">
                  <i class="ni ni-button-power text-red"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Header -->
    <!-- Header -->
    <div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">Mahines</h6>
              <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                  <li class="breadcrumb-item"><a href="#">Machines</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Machines List</li>
                </ol>
              </nav>
            </div>
            <div class="col-lg-6 col-5 text-right">
            <a href="#" class="btn btn-sm btn-neutral" data-toggle= "modal" data-target="#exampleModal">New</a>
              <a href="#" class="btn btn-sm btn-neutral">Filters</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--6">
      <!-- Table -->
      <div class="row">
        <div class="col">
          <div class="card">
            <!-- Card header -->
            <div class="card-header">
              <h3 class="mb-0">Machines List</h3>
              <p class="text-sm mb-0">
                This is an exmaple of list using the well known datatables.net plugin. This is a minimal setup in order to get started fast.
              </p>
            </div>
<!-- =================================================================================   Table   ============================================================================================ -->
<!-- ======================================================================================================================================================================================== -->

<div class="table-responsive py-4">
              <table class="table table-flush" id="datatable-basic">
                <thead class="thead-light">

                <?php
                $connection = mysqli_connect("localhost","root","");
                $db = mysqli_select_db($connection, 'pjdb');

                $query = "SELECT * FROM machine_table";
                $query_run = mysqli_query($connection,$query);
            
                ?>
                  <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Type</th>
                  <th scope="col">Diameter</th>
                  <th scope="col">gauge</th>
                  <th scope="col">Feeders</th>
                  <th scope="col">needles</th>
                  <th scope="col">Cam Tracks</th>
                  <th scope="col">Belt(mm)</th>
                  <th scope="col">Machine Number</th>
                  <th scope="col">Action</th>
						    	</tr>
                </thead>
                <tfoot>
                  <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Type</th>
                  <th scope="col">Diameter</th>
                  <th scope="col">gauge</th>
                  <th scope="col">Feeders</th>
                  <th scope="col">needles</th>
                  <th scope="col">Cam Tracks</th>
                  <th scope="col">Belt(mm)</th>
                  <th scope="col">Machine Number</th>
                  <th scope="col">Action</th>
                  </tr>
                </tfoot>
                <tbody>
                <?php
                if ($query_run)
                {
                    foreach($query_run as $row)
                {
                ?>        
                      
						
								<tr>
                  <td> <?php echo $row['id']; ?></td>
                  <td> <?php echo $row['brand']; ?></td>
                  <td> <?php echo $row['machine_type']; ?></td>
                  <td> <?php echo $row['diameter']; ?></td>
                  <td> <?php echo $row['gauge']; ?></td>
                  <td> <?php echo $row['feeders']; ?></td>
                  <td> <?php echo $row['needles']; ?></td>
                  <td> <?php echo $row['camtracks']; ?></td>
                  <td> <?php echo $row['belt']; ?></td>
                  <td> <?php echo $row['machine_nb']; ?></td>
                  <td> 
                  <a href="#!" class="editbtn" data-toggle="tooltip" data-original-title="Edit">
                    <i class="fas fa-user-edit blue-text"></i>
                  </a>
                  &ensp;
 
                  <a href="#!" class="deletebtn" data-toggle="tooltip" data-original-title="Delete">
                    <i class="fas fa-trash text-red"></i>
                  </a>
                  </td>
								</tr>															
                </tbody>
                <?php
                    }
                }
                else
                {
                    echo "Not Record Found";
                }
                ?>
              </table>
            </div>
          </div>

      <!-- ======================================================================================================================================================================================== -->
      <!-- Footer -->
      <footer class="footer pt-0">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-lg-6">
            <div class="copyright text-center text-lg-left text-muted">
              &copy; 2019 <a href="https://www.creative-tim.com" class="font-weight-bold ml-1" target="_blank">Creative Tim</a>
            </div>
          </div>
          <div class="col-lg-6">
            <ul class="nav nav-footer justify-content-center justify-content-lg-end">
              <li class="nav-item">
                <a href="https://www.creative-tim.com" class="nav-link" target="_blank">Creative Tim</a>
              </li>
              <li class="nav-item">
                <a href="https://www.creative-tim.com/presentation" class="nav-link" target="_blank">About Us</a>
              </li>
              <li class="nav-item">
                <a href="http://blog.creative-tim.com" class="nav-link" target="_blank">Blog</a>
              </li>
              <li class="nav-item">
                <a href="https://www.creative-tim.com/license" class="nav-link" target="_blank">License</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
  <!-- Argon Scripts -->
  <!-- Core -->
  <script src="../../assets/vendor/jquery/dist/jquery.min.js"></script>
  <script src="../../assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="../../assets/vendor/js-cookie/js.cookie.js"></script>
  <script src="../../assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js"></script>
  <script src="../../assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js"></script>
  <!-- Optional JS -->
  <script src="../../assets/vendor/datatables.net/js/jquery.dataTables.min.js"></script>
  <script src="../../assets/vendor/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
  <script src="../../assets/vendor/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
  <script src="../../assets/vendor/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"></script>
  <script src="../../assets/vendor/datatables.net-buttons/js/buttons.html5.min.js"></script>
  <script src="../../assets/vendor/datatables.net-buttons/js/buttons.flash.min.js"></script>
  <script src="../../assets/vendor/datatables.net-buttons/js/buttons.print.min.js"></script>
  <script src="../../assets/vendor/datatables.net-select/js/dataTables.select.min.js"></script>
  <!-- Argon JS -->
  <script src="../../assets/js/argon.js?v=1.1.0"></script>
  <!-- Demo JS - remove this in your project -->
  <script src="../../assets/js/demo.min.js"></script>
<!-- =============================================================================================       Delete Button        ========================================================================================== -->


<script>
  $(document).ready(function(){
    $('#datatable-basic').DataTable();
  });  

</script>  

<script>
    $(document).ready(function(){
        $('.deletebtn').on('click', function(){
            $('#deletemodal').modal('show');

            $tr = $(this).closest('tr');

            var data = $tr.children("td").map(function(){
                return $(this).text();
                
            }).get();

            console.log(data);

            $('#delete_id').val(data[0]);

        });


    });
</script>  
<!-- =================================================================================================================================================================================================================== -->

<!-- ==============================================================================================       Edit Button        =========================================================================================== -->

<script>
    $(document).ready(function(){
        $('.editbtn').on('click', function(){
            $('#editmodal').modal('show');

            $tr = $(this).closest('tr');

            var data = $tr.children("td").map(function(){
                return $(this).text();
                
            }).get();

            console.log(data);

            $('#update_id').val(data[0]);
            $('#brand').val(data[1]);
            $('#machine_type').val(data[2]);
            $('#diameter').val(data[3]);
            $('#gauge').val(data[4]);
            $('#feeders').val(data[5]);
            $('#needles').val(data[6]);
            $('#camtracks').val(data[7]);
            $('#belt').val(data[8]);
            $('#machine_nb').val(data[9]);
        });


    });
</script>  
<!-- =================================================================================================================================================================================================================== -->


</body>

</html>