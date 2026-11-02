import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AI, Math,robot,business,geo,phy,bio,tool,edu,cloud,data,cyber,health,history,space,finance,dev,lang,sport,environment,design,physics,chemistry,career,mobile,datas,food,travel,music,law,architecture,agri,gami,soft,} from './model/card';
import { aiArr, mathArr,roboticsArr,businessArr,geographyArr,psychologyArr,biologyArr,techToolsArr,educationArr,cloudArr,databaseArr,dataScienceArr,
  cyberSecurityArr,healthArr,historyArr,spaceArr,financeArr,devOpsArr,languageArr,sportsArr,environmentArr,designArr,physicsArr,
  chemistryArr,careerArr,mobileDevArr,foodArr,travelArr,musicArr,lawArr,architectureArr,agricultureArr,gamingArr,softSkillsArr
} from './const/cardata';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  imports: [RouterOutlet,CommonModule,MatButtonModule,MatIconModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('card-task-project');
  aiArr:AI[]=aiArr
  mathArr:Math[]=mathArr;
  roboticsArr:robot[]=roboticsArr;
  businessArr:Array <business>=businessArr;
  geographyArr:Array <geo>=geographyArr;
  psychologyArr:Array <phy>=psychologyArr;
  biologyArr:Array <bio>=biologyArr;
  techToolsArr:Array <tool>=techToolsArr;
  educationArr:Array <edu>=educationArr;
  cloudArr:Array <cloud>=cloudArr;
  databaseArr:Array <data>=databaseArr;
  dataScienceArr:Array <datas>=dataScienceArr;
  cyberSecurityArr:Array <cyber>=cyberSecurityArr;
  healthArr:Array <health>=healthArr;
  historyArr:Array <history>=historyArr;
  spaceArr:Array <space>=spaceArr;
  financeArr:Array <finance>=financeArr;
  devOpsArr:Array <dev>=devOpsArr;
  languageArr:Array <lang>=languageArr;
  sportsArr:Array <sport>=sportsArr;
  environmentArr:Array <environment>=environmentArr;
  designArr:Array <design>=designArr;
  physicsArr:Array <physics>=physicsArr;
  chemistryArr:Array <chemistry>=chemistryArr;
  careerArr:Array <career>=careerArr;
  mobileDevArr:Array <mobile>=mobileDevArr;
  foodArr:Array <food>=foodArr;
  travelArr:Array <travel>=travelArr;
  musicArr:Array <music>=musicArr;
  lawArr:Array <law>=lawArr;
  architectureArr:Array <architecture>=architectureArr;
  agricultureArr:Array <agri>=agricultureArr;
  gamingArr:Array <gami>=gamingArr;
  softSkillsArr:Array <soft>=softSkillsArr;






}
