import {
  animate,
  group,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("box", [
      state(
        "start",
        style({
          background: "blue",
        })
      ),
      state(
        "end",
        style({
          background: "red",
          transform: "scale(1.2)",
        })
      ),
      state(
        "special",
        style({
          background: "orange",
          transform: "scale(0.5)",
          borderRadius: "50%",
        })
      ),
      transition("start => end", animate(450)),
      transition("end => start", animate("950ms ease-in")),
      // transition("special => *", animate(500)),
      transition("* <=> special", [
        style({ background: "green", transform: "scale(1.5)" }),
        animate(500),
        style({ background: "pink" }),
        animate(500),
      ]),
      // void => *
      transition(":enter", [style({ opacity: 0 }), animate("900ms ease-out")]),
      // "* => void"
      transition(":leave", [
        style({ opacity: 1 }),
        group([
          animate(
            "900ms ease-out",
            style({ opacity: 0, transform: "scale(1.2)"})
          ),
          animate(
            100,
            style({ color: "#000", fontWeight: "bold" })
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  boxState = "start";
  visible = "true";

  animate() {
    this.boxState = this.boxState === "end" ? "start" : "end";
  }
}
