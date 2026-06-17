import "./CatWidget.css";
import catVideo from "../assets/cat2.mp4";

export default function CatWidget() {
    return (
        <div className="cat-widget">
            <video autoPlay loop muted playsInline>
                <source src={catVideo} type="video/mp4" />
            </video>
        </div>
    );
}