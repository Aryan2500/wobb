import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-compaign',
  templateUrl: './compaign.component.html',
  styleUrls: ['./compaign.component.css']
})
export class CompaignComponent implements OnInit {
  campaigns: any;

  constructor(private campaignService : CampaignService) { }

  ngOnInit(): void {
    this.getCampaign()
  }

  getCampaign(){
    this.campaignService.getCampagin().subscribe( campaings=>{
      this.campaigns = campaings
      console.log(this.campaigns)
    })
  }
}
