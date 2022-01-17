<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Inicio de Sesión</title>
        <link href="./Assets/css/styles.css" rel="stylesheet" />
        <script src="<?php echo base_url; ?>font-awesome/5.13.0/js/all.min.js" crossorigin="anonymous"></script>
    </head>
    <body class="bg-primary">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Inicio de Sesión</h3></div>
                                    <div class="card-body">
                                        <form id="frmLogin">
                                            <div class="form-group">
                                                <label class="small mb-1" for="usuario"><i class="fa fa-user" aria-hidden="true"></i> Usuario</label>
                                                <input class="form-control py-4" id="usuario" name="usuario" type="text" placeholder="Ingrese su usuario" />
                                            </div>
                                            <div class="form-group">
                                                <label class="small mb-1" for="clave"><i class="fa fa-key" aria-hidden="true"></i> Contraseña</label>
                                                <input class="form-control py-4" id="clave" name="clave" type="password" placeholder="Ingrese su contraseña" />
                                            </div>
                                            <div class="alert alert-danger text-center d-none" id="alert" role="alert">

                                            </div>
                                            <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <button class="btn btn-primary" type="submit" onclick="frmLogin(event);">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; <a href="https://linenben17.gq">LinenBen17</a> <?php echo date("Y"); ?></div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        <script src="<?php echo base_url; ?>jquery/3.5.1/jquery.min.js" crossorigin="anonymous"></script>
        <script src="<?php echo base_url; ?>bootstrap/4.5.3/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="././Assets/js/scripts.js"></script>
        <script>
            const base_url = "<?php echo base_url2; ?>";
        </script>
        <script src="././Assets/js/funciones.js"></script>
    </body>
</html>