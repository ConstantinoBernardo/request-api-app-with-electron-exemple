export default {
  data() {
    return { }
  },
  template: /*start*/`
     <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content bg-dark text-light">
                <div class="modal-header">
                    <h5 class="modal-title" id="modal-title">Settings</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3 form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="theme" >
                        <label class="form-check-label" for="theme">Theme Light</label>
                    </div>
                    <br><br>
                     <div class="mb-3 form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="cache" checked>
                        <label class="form-check-label" for="cache">Save Cache</label>
                    </div>
                    <br><br>
                    <div class="mb-3">
                      <label for="font-size" class="form-label">Zoom</label>
                      <input type="range" class="form-range" value="1" min="1" max="5" step="1" id="font-size">
                    </div>
                <br><br><br><br><br><br><br>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">cancel</button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
    </div>
  ` /*end*/
}
