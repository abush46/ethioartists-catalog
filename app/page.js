import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Title</h4>
              <h6 class="card-subtitle text-muted">Subtitle</h6>
            </div>
            <img src="holder.js/100x180/" alt="image" />
            <div class="card-body">
              <p class="card-text">Text</p>
              <a href="#" class="card-link">
                Link 1
              </a>
              <a href="#" class="card-link">
                Link 2
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Title</h4>
              <h6 class="card-subtitle text-muted">Subtitle</h6>
            </div>
            <img src="holder.js/100x180/" alt="" />
            <div class="card-body">
              <p class="card-text">Text</p>
              <a href="#" class="card-link">
                Link 1
              </a>
              <a href="#" class="card-link">
                Link 2
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Title</h4>
              <h6 class="card-subtitle text-muted">Subtitle</h6>
            </div>
            <img src="holder.js/100x180/" alt="" />
            <div class="card-body">
              <p class="card-text">Text</p>
              <a href="#" class="card-link">
                Link 1
              </a>
              <a href="#" class="card-link">
                Link 2
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
