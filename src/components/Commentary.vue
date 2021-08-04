<template>
  <div>
    <h1>Votre actualité</h1>
    <div class="container">
      <div class="row">
        <div class="panel panel-default widget">
          <div class="panel-heading">
            <span> Les commentaires :</span>
          </div>
          <div class="panel-body">
            <ul class="list-group">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-xs-2 col-md-1">
                    <img
                      src="http://placehold.it/80"
                      class="img-circle img-responsive"
                      alt=""
                    />
                  </div>
                  <div class="col-xs-10 col-md-11">
                    <div>
                      <a
                        href="http://www.jquery2dotnet.com/2013/10/google-style-login-page-desing-usign.html"
                      >
                        Google Style Login Page Design Using Bootstrap</a
                      >
                      <div class="mic-info">
                        By: <a href="#">Bhaumik Patel</a>
                      </div>
                    </div>
                    <div class="comment-text">Awesome design</div>
                    <div class="action">
                      <button
                        type="button"
                        class="btn btn-primary btn-xs"
                        title="Edit"
                      >
                        <span class="glyphicon glyphicon-pencil"></span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-success btn-xs"
                        title="Approved"
                      >
                        <span class="glyphicon glyphicon-ok"></span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger btn-xs"
                        title="Delete"
                      >
                        <span class="glyphicon glyphicon-trash"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-xs-2 col-md-1">
                    <img
                      src="http://placehold.it/80"
                      class="img-circle img-responsive"
                      alt=""
                    />
                  </div>
                  <div class="col-xs-10 col-md-11">
                    <div>
                      <a href="http://bootsnipp.com/BhaumikPatel/snippets/Obgj"
                        >Admin Panel Quick Shortcuts</a
                      >
                      <div class="mic-info">
                        By: <a href="#">Bhaumik Patel</a> 
                      </div>
                    </div>
                    <div class="comment-text">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim
                    </div>
                    <div class="action">
                      <button
                        type="button"
                        class="btn btn-primary btn-xs"
                        title="Edit"
                      >
                        <span class="glyphicon glyphicon-pencil"></span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-success btn-xs"
                        title="Approved"
                      >
                        <span class="glyphicon glyphicon-ok"></span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger btn-xs"
                        title="Delete"
                      >
                        <span class="glyphicon glyphicon-trash"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-xs-2 col-md-1">
                    <img
                      src="http://placehold.it/80"
                      class="img-circle img-responsive"
                      alt=""
                    />
                  </div>
                  <div class="col-xs-10 col-md-11">
                    <div>
                      <a href="http://bootsnipp.com/BhaumikPatel/snippets/4ldn"
                        >Cool Sign Up</a
                      >
                      <div class="mic-info">
                        By: <a href="#">Bhaumik Patel</a>
                      </div>
                    </div>
                    <div class="comment-text">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim
                    </div>
                    <div class="action">
                      <button
                        type="button"
                        class="btn btn-primary btn-xs"
                        title="Edit"
                      >
                        <span class="glyphicon glyphicon-pencil"></span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-success btn-xs"
                        title="Approved"
                      >
                        <span class="glyphicon glyphicon-ok"></span>
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger btn-xs"
                        title="Delete"
                      >
                        <span class="glyphicon glyphicon-trash"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <a href="#" class="btn btn-primary btn-sm btn-block" role="button"
              ><span class="glyphicon glyphicon-refresh"></span> More</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
body {
  padding-top: 30px;
}
.container{
    width: 70%;
}
.widget .panel-body {
  padding: 0px;
}
.widget .list-group {
  margin-bottom: 0;
}
.widget .panel-title {
  display: inline;
}
.widget .label-info {
  float: right;
}
.widget li.list-group-item {
  border-radius: 0;
  border: 0;
  border-top: 1px solid #ddd;
}
.widget li.list-group-item:hover {
  background-color: rgba(86, 61, 124, 0.1);
}
.widget .mic-info {
  color: #666666;
  font-size: 11px;
}
.widget .action {
  margin-top: 5px;
}
.widget .comment-text {
  font-size: 12px;
}
.widget .btn-block {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
</style>