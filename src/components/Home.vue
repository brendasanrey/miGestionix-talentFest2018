<template>
  <div>
    <nav>
      <div class="nav-wrapper navbarColor">
        <div class="left-align ml">
          <a
            href="#"
            class="brand-logo"
          >MiGestionix</a>
        </div>
        <ul
          id="nav-mobile"
          class="right hide-on-med-and-down"
        >
          <li><img
              src="images/yuna.jpg"
              alt=""
              class="circle responsive-img"
            > </li>
          <li>Hola, {{ user }}</li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
    </nav>

    <div class="row">
      <div class="col s6 m6">
        <div class="card">
          <div class="card-content">
            <span class="card-title left">Cuentas por cobrar</span>
            <a class="btn halfway-fab waves-effect waves-light orange darken-3 rounded"><i class="material-icons">add</i></a>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Item Name</th>
                  <th>Item Price</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col s6 m6">
        <div class="card">
          <div class="card-content">
            <span class="card-title left">Top Clientes</span>
            <a class="btn halfway-fab waves-effect waves-light orange darken-3 rounded"><i class="material-icons">add</i></a>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Item Name</th>
                  <th>Item Price</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col s12 m12">
        <div class="card">
          <div class="card-content">
            <span class="card-title left">Clientes - Todos</span>
            <a class="btn halfway-fab waves-effect waves-light orange darken-3 rounded"><i class="material-icons">add</i></a>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Item Name</th>
                  <th>Item Price</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "clients",
  data() {
    return {
      user: "demo@gestionix.com"
    };
  }
};
</script>

<style>
.navbarColor {
  background-color: #37323f;
  color: white;
}

.rounded {
  border-radius: 200px;
}

.ml {
  margin-left: 2em;
}
</style>