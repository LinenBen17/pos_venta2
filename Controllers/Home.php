<?php
    class Home extends Controller{
        public function __construct() {
            session_start();
            if (!empty($_SESSION['activo'])) {
                header("location:" . base_url2 . "Usuarios");
            }
            parent::__construct();
        }
        public function index()
        {
            $this->views->getView($this, "index");
        }
    }
    

?>