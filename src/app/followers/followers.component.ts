import { Component, OnInit } from "@angular/core";
import { FollowerService } from "../services/follower.service";

@Component({
  selector: "followers",
  templateUrl: "./followers.component.html",
})
export class FollowersComponent implements OnInit {
  followers: any[];
  user: string;
  title: string;

  constructor(private followerService: FollowerService) {}

  ngOnInit() {
    this.getFollowers();
    this.user = "clgrogan";
    this.title = "User " + this.user + "'s Followers";
  }

  getFollowers() {
    this.followerService.getAll().subscribe((followers) => {
      this.followers = followers as Array<Object>;
      console.log(this.followers);
    });
  }
}
