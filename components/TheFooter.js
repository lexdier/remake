export default function TheFooter() {
  return (
    <footer class="bg-dark text-center text-white">
      <div class="container p-4 pb-0">
        <section class="">
          <form action="">
            <div class="row d-flex justify-content-center">
              <div class="col-auto">
                <p class="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div class="col-md-5 col-12">
                <div class="form-outline form-white mb-4">
                  <input type="email" id="form5Example29" className="form-control" />
                  <label className="form-label" htmlFor="form5Example29">Email address</label>
                </div>
              </div>
              <div class="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
      <div class="text-center p-3">
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  )
}
