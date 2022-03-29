// license
      /*    
        @licstart  The following is the entire license notice for the 
        JavaScript code in this page.

        Copyright (C) 2022 mrbonjour

        The JavaScript code in this page is free software: you can
        redistribute it and/or modify it under the terms of the GNU
        General Public License (GNU GPL) as published by the Free Software
        Foundation, either version 3 of the License, or (at your option)
        any later version.  The code is distributed WITHOUT ANY WARRANTY;
        without even the implied warranty of MERCHANTABILITY or FITNESS
        FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

        As additional permission under GNU GPL version 3 section 7, you
        may distribute non-source (e.g., minimized or compacted) forms of
        that code without the copy of the GNU GPL normally required by
        section 4, provided you include this license notice and a URL
        through which recipients can access the Corresponding Source.   


        @licend  The above is the entire license notice
        for the JavaScript code in this page.
        */

// audio
var audiobg = new Audio('mega.ogg');
audiobg.play(); 
audiobg.loop = true; 
var audiosword = new Audio('sword.ogg');
var audiosword2 = new Audio('sword2.ogg'); 
var audiohup = new Audio('twink.ogg');
var audiojump = new Audio('BonusCube.ogg');
var jupiterloading = new Audio('jupiter_loading.wav'); 
var freedom = new Audio('freedom.ogg'); 


// IMAGES
var herofreedom=new Image();
var heroIldeR=new Image();
var heroIldeL=new Image();
var heroRun0L=new Image();
var heroRun1L=new Image();
var heroRun0R=new Image();
var heroRun1R=new Image();
var heroPrepareAttackL=new Image();
var heroUnleashAttackL=new Image();
var	heroPrepareAttackR=new Image();
var heroUnleashAttackR=new Image();
var heroCrouchIdleR=new Image();
var heroCrouchIdleL=new Image();
var heroCrouchPrepareAttackR=new Image();
var heroCrouchUnleashAttackR=new Image();
var heroCrouchPrepareAttackL=new Image();
var heroCrouchUnleashAttackL=new Image();
var jupiter0=new Image();
var jupiter1=new Image();
var jupiterR=new Image();
var jupiterL=new Image();
var heroProtectStandR=new Image();
var heroProtectStandL=new Image();
var heroProtectCrouchR=new Image();
var heroProtectCrouchL=new Image();
var enemyL=new Image();
var enemyR=new Image();
var enemyDeadR=new Image();
var live=new Image();
var rudiskeyboard=new Image();
var bloodRudis=new Image();
var wall=new Image();
var healthimage=new Image();
var blood=new Image();
var torch=new Image();
var rudis=new Image();





var fletxaL=new Image();
var fletxaR=new Image();





// PRELOAD IMAGES
addLoadEvent(preloader);
//VARS
let deltaTime = 0;
let lastTimestamp = 0;
const perfectFrameTime = 1000 / 60;
var screen=-1;
var player_x=-30;
var player_y=0;
var gravityw=false;
var crouch=false;
var attack=false;
var go_left=false;
var go_right=false;
var protect=false;
var AnimationState="Idle";
var velocity_right=0;
var velocity_left=0;
var velocity_attack=0;
var velocity_jupiter=0;
var run_animation_left=0;
var run_animation_right=0;
var run_animation_attack=0;
var run_animation_jupiter=0;
var attack_state=0; //treure
var post_jupiter=false;
var power_jupiter=0;
var enemy_x=260;
var enemy_y=180;
var bFirstenemyDead=true; 
var arrow_x=enemy_x+64;
var arrow_y=enemy_y+64;
var heroHealth=100; 
var EnemyArcherHealth=100;
var gameover=false;
var jumping=false;
var to_left=false;
var counterforjump=0;
var fightmode=false;
var timebasejump=0;
var screenArrayNext;
var botiquin0_agafat=false;        
var botiquin1_agafat=false;
var freedomplayable=true;
var Archer1actor_y = 0; 
var Archer1actor_x = 0;
var Archer1NextScreenArray;
var Archer2actor_y = 0; 
var Archer2actor_x = 0;
var Archer2NextScreenArray;
var Archer3actor_y = 0; 
var Archer3actor_x = 0;
var Archer3NextScreenArray;
var Knifevar;
var EnemyArcher1;
var EnemyArcher2;
var EnemyArcher3;
var EnemyArcher1AI;
var EnemyArcher2AI;
var EnemyArcher3AI;
var VictoryRudis; 
var Archer1jump=false;
var Archer2jump=false;
var Archer3jump=false;
var Archer1PreviousScreenArray;//potser no faran falta
var Archer2PreviousScreenArray;//potser no faran falta
var Archer3PreviousScreenArray;//potser no faran falta
var desiredActor1y;
var desiredActor2y;
var desiredActor3y;
var desiredActor1yprevious;
var desiredActor2yprevious;
var desiredActor3yprevious;
var zpressed=false;
var leftpressed=false;
var rightpressed=false;
var jupiterbuttonpressed=false;
var jupiterbuttonreleased=false;
function restart()
{actorsIngame = []; 
    if( actorsIngame.indexOf(knifevar) > -1 )
DestroySpecificActorOfTheWorld(knifevar);
    if( actorsIngame.indexOf(VictoryRudis) > -1 )
DestroySpecificActorOfTheWorld(VictoryRudis);
    if( actorsIngame.indexOf(EnemyArcher1) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher1);
    if( actorsIngame.indexOf(EnemyArcher1AI) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher1AI);	
	if( actorsIngame.indexOf(EnemyArcher2) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher2);
	if( actorsIngame.indexOf(EnemyArcher2AI) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher2AI); 
    if(actorsIngame.indexOf(EnemyArcher3) > -1)
    DestroySpecificActorOfTheWorld(EnemyArcher3);
    if(actorsIngame.indexOf(EnemyArcher3AI) > -1)
    DestroySpecificActorOfTheWorld(EnemyArcher3AI);
deltaTime = 0;
lastTimestamp = 0;
screen=-1;
player_x=-30;
player_y=0;
gravityw=false;
crouch=false;
attack=false;
go_left=false;
go_right=false;
protect=false;
AnimationState="Idle";
velocity_right=0;
velocity_left=0;
velocity_attack=0;
velocity_jupiter=0;
run_animation_left=0;
run_animation_right=0;
run_animation_attack=0;
run_animation_jupiter=0;
attack_state=0; //treure
post_jupiter=false;
power_jupiter=0;
enemy_x=260;
enemy_y=180;
bFirstenemyDead=true; 
arrow_x=enemy_x+64;
arrow_y=enemy_y+64;
heroHealth=100; 
EnemyArcherHealth=100;
gameover=false;
jumping=false;
to_left=false;
counterforjump=0;
fightmode=false;
timebasejump=0;
screenArrayNext;
botiquin0_agafat=false;        
botiquin1_agafat=false;
freedomplayable=true;
Archer1actor_y = 0; 
Archer1actor_x = 0;
Archer1NextScreenArray;
Archer2actor_y = 0; 
Archer2actor_x = 0;
Archer2NextScreenArray;
Archer3actor_y = 0; 
Archer3actor_x = 0;
Archer3NextScreenArray;
Knifevar;
EnemyArcher1;
EnemyArcher2;
EnemyArcher3;
EnemyArcher1AI;
EnemyArcher2AI;
EnemyArcher3AI;
VictoryRudis; 
Archer1jump=false;
Archer2jump=false;
Archer3jump=false;
Archer1PreviousScreenArray;//potser no faran falta
Archer2PreviousScreenArray;//potser no faran falta
Archer3PreviousScreenArray;//potser no faran falta
desiredActor1y;
desiredActor2y;
desiredActor3y;
desiredActor1yprevious;
desiredActor2yprevious;
desiredActor3yprevious;
zpressed=false;
leftpressed=false;
rightpressed=false;
jupiterbuttonpressed=false;
jupiterbuttonreleased=false;
}

//Classes for actors ingame
//Runtime actors 
class Actor 
{
	constructor(name, x, y, team, mainTexture, InternalTexture, ActorHealth, ActorState ) 
	{

		this.name = name;
		this.x = x; 
		this.y = y;
		this.team = team; //Team 1 Players/hero  Team 2 Enemies
		this.mainTexture = mainTexture;//"BloodForWebGladiators1.png"; 
		this.InternalTexture=new Image();
		this.InternalTexture.setAttribute("src", this.mainTexture);  
		this.ActorHealth = 100; 	
		this.ActorState = "Alive"; //"Alive" is alive, "Dead" is dead

	}

	 setLocationX(px, py) 
	 {
		this.x = px; 
	 }

	 setLocationY(px, py) 
	 {
		this.y = py; 	 
	 }	 
	 
	ActorTakeDamage(DamageAmount)
	{
		this.ActorHealth -= DamageAmount; 
		
		if( this.ActorHealth <= 0 && this.ActorState == "Alive" ) 
		{
			this.ActorDie(); 
		}
		
		spawnActor('PlayerBloodParticle', this.x, this.y, 1, "blood0.png", "Particle");   //actor 0	 
	}
  
	ActorDie()
	{
		this.ActorSetActorState("Dead");
		this.ChangeMainTexture("enemyDeadR.png");
		setInterval(this.DestroySelf.bind(this),3000.0); //Find a way to clear the timer
	}
  
	ActorSetActorState(NewActorState)
	{
		this.ActorState = NewActorState; 
		
	}
  
  
 
	ActorTick()
	{

		if( DoesCollideXYWithXY(this.x, this.y, player_x, player_y, 20, 20 ) )
		{

		    this.CollideOverlap();

	    }

		
		if( this.y > 215  ) 
		{ 	
			this.ActorFeltThroughWorld();
		}

		if( this.x < -50 || this.x > 340  ) 
		{ 	
			this.ActorOutsideWorld();
		}	
	
	}  
  
	CollideOverlap()
	{

	}
 
	ChangeMainTexture(NewTexture)
	{
		this.InternalTexture.setAttribute("src", NewTexture);		
	}
 
	ActorFeltThroughWorld()
	{ 
	
	
	}
	
	ActorOutsideWorld()
	{ 
	
	
	}

 
	DestroySelf()
	{
		this.ActorState = "Dead";
		DestroySpecificActorOfTheWorld(this); 
	} 

}

class Pawn extends Actor 
{
	constructor(name, x, y, team, mainTexture, PawnController) 
	{
		super(name, x, y, team, mainTexture, PawnController); 

	}
	
	ActorTick()
	{
	super.ActorTick(); 
	
	
		if( this.PawnController && this.ActorState != "Dead" ) //Valid check here the object exists 
		{
			this.x = InterpolateNumbers( this.x, 0.001, this.PawnController.DesiredLocToGoX );
			

			if ( Math.abs( InterpolateNumbers( this.x, 0.001, this.PawnController.DesiredLocToGoX ) ) > 50 ) 
			{   
				if( InterpolateNumbers( this.x, 0.001, this.PawnController.DesiredLocToGoX ) >  this.x  ) 
				{
					this.ChangeMainTexture('enemyR.png');  
				}
				else
				{ 
					this.ChangeMainTexture('enemyL.png'); 
				}
			} 

		}
	}

	ActorFeltThroughWorld()
	{ 
		if(this.ActorState != "Dead") 
		{ 
			this.ActorDie();
		}
	
	}
	

	ActorOutsideWorld()
	{ 
		if(this.ActorState != "Dead") 
		{ 
			this.DestroySelf();
		}	
	
	}	
	

}


class Pickup extends Actor 
{
	constructor(name, x, y, team, mainTexture) 
	{
		super(name, x, y, team, mainTexture); 
	}
	
	

}



class Rudis extends Pickup 
{
	constructor(name, x, y, team, mainTexture) 
	{
		super(name, x, y, team, mainTexture); 
	}
	
	

}


//These are blood or sparks and such
class Knife extends Pickup 
{
	constructor(name, x, y, team, mainTexture) 
	{
		super(name, x, y, team, mainTexture); 
	}
	
	

}



class Particle extends Actor 
{
	constructor(name, x, y, team, mainTexture, TimeAlive) 
	{
		super(name, x, y, team, mainTexture);
		this.TimeAlive = TimeAlive;  
		setInterval(this.DestroySelf.bind(this),this.TimeAlive); //Set a timer latent true
	}
	
	ActorTakeDamage(DamageAmount)
	{

	}	

}


class Projectile extends Actor 
{
	constructor(name, x, y, team, mainTexture, TimeAlive, ProjectileInitSpeedX, ProjectileInitSpeedY) 
	{
		super(name, x, y, team, mainTexture);
		this.TimeAlive = TimeAlive;  
		this.ProjectileInitSpeedX = ProjectileInitSpeedX; 
		this.ProjectileInitSpeedY = ProjectileInitSpeedY; 

		
	}
  

	CollideOverlap()
	{
		
		
		if(!crouch)
		{		
			if( !protect )
			{
				takeDamage("Hero", 5); 
				this.DestroySelf(); 				
			}
			else
			{
				this.DestroySelf(); 				
			}

		}
		else
		{

		}


	}
 



}



class Controller extends Actor 
{
  constructor(name, x, y, team, mainTexture, controlledactor, DesiredLocToGoX, DesiredLocToGoY) 
  {
  super(name, x, y, team, mainTexture);
  this.controlledactor = controlledactor; 
	
  this.DesiredLocToGoX = 0.0; 
  this.DesiredLocToGoY = 0.0;     
	  
  }
  
  posses(possessed)
  {
	this.controlledactor = possessed; 
  }
   
  SetDesiredLocation(PDesiredLocToGoX, PDesiredLocToGoY)
  {
	this.DesiredLocToGoX = PDesiredLocToGoX; 
	this.DesiredLocToGoY = PDesiredLocToGoY; 
  }  
   
   
   
  
}

class AIController extends Controller 
{
  constructor(name, x, y, team, mainTexture, controlledactor, DesiredLocToGoX, DesiredLocToGoY) 
  {
  super(name, x, y, team, mainTexture, controlledactor, DesiredLocToGoX, DesiredLocToGoY);

  setInterval(this.movementtickAI.bind(this),1000); //Set a timer latent true
  setInterval(this.offensivetickAI.bind(this),1000); //Set a timer latent true


  
  }
  movementtickAI()
  {
var gr0=getRandomInt(200);
var gr1=getRandomInt(60);
	  if( getRandomInt(2) == 0 ) 
	  { 
         if(this.controlledactor.x+gr0<350 )	 
		 this.SetDesiredLocation(this.controlledactor.x+gr0, this.controlledactor.y); 
	  }	
	  else 
	  {
		 if(this.controlledactor.x-gr0>-10)	 	
		 this.SetDesiredLocation(this.controlledactor.x+gr0 *-1, this.controlledactor.y); 
	  }
  }  
  
  offensivetickAI()
  {

      this.launcharrowpossessed(); 

  }    
  
  launcharrowpossessed()
  {
  
	if( this.controlledactor != null )
	{	
		if( this.controlledactor.ActorState != "Dead" ) 
		{
            if(player_x+64<this.controlledactor.x+64)
			spawnActor('EnemyArcherArrow', this.controlledactor.x, this.controlledactor.y+54, 1,"fireL.png", "Projectile", null , 5000, -100, 0);   //actor 0
            if(player_x+64>=this.controlledactor.x+64)
			spawnActor('EnemyArcherArrow', this.controlledactor.x+64, this.controlledactor.y+54, 1,"fireR.png", "Projectile", null , 5000, 100, 0);   //actor 0 	
		}
	}
  
  } 
  
  
}  

let actorsIngame = []; 


function spawnActor(name, x,y, team, mainTexture, actorClass, ControlledActor, LifeTimeOfActor, ActorInitialSpeedX, ActorInitialSpeedY)
{

    if( actorClass == "Actor")
	{
	    actorsIngame.push(new Actor(name, x, y, team, mainTexture)); 
	}

    if( actorClass == "Controller")
	{
	    actorsIngame.push(new Controller(name, x, y, team, mainTexture)); //TO FIX
	}


    if( actorClass == "AIController")
	{
	    actorsIngame.push(new AIController(name, x, y, team, mainTexture, ControlledActor)); 
	}

    if( actorClass == "Particle")
	{																   //500 is miliseconds
	    actorsIngame.push(new Particle(name, x, y, team, mainTexture, 500 ) ); //Becareful miliseconds
	}

	if( actorClass == "Projectile" )
	{
	    actorsIngame.push(new Projectile(name, x, y, team, mainTexture, 500, ActorInitialSpeedX, 0 ) ); //Becareful miliseconds			
	}

	if( actorClass == "Pawn" )
	{
	    actorsIngame.push(new Pawn(name, x, y, team, mainTexture ) ); //Becareful miliseconds			
	}

	if( actorClass == "Pickup" )
	{
	    actorsIngame.push(new Pickup(name, x, y, team, mainTexture ) ); //Becareful miliseconds			
	}

	if( actorClass == "Rudis" )
	{
	    actorsIngame.push(new Rudis(name, x, y, team, mainTexture ) ); //Becareful miliseconds			
	}

	if( actorClass == "Knife" )
	{
	    actorsIngame.push(new Knife(name, x, y, team, mainTexture ) ); //Becareful miliseconds			
	}


	return actorsIngame[actorsIngame.length-1]; 
}


function Intervalterminate()
{
	DestroySpecificActorOfTheWorld(BloodParticoolObject); 
}


function DestroySpecificActorOfTheWorld(ActorToBeDestroyed) 
{

		
	if( actorsIngame.indexOf(ActorToBeDestroyed) > -1 ) 
	{
		actorsIngame.splice(actorsIngame.indexOf(ActorToBeDestroyed),  1);
	}
}



function checkIsIn(objectToDestroy) 
{


  return 1;
}	







function preloader() 
    {
    window.requestAnimationFrame(draw);	
    if (document.images) 
        {
        enemyL.setAttribute("src", "enemyL.png");
        enemyR.setAttribute("src", "enemyR.png");
        heroIldeL.setAttribute("src", "heroIldeL.png");
		heroIldeR.setAttribute("src", "heroIldeR.png");
        heroRun0L.setAttribute("src", "heroRun0L.png");
        heroRun1L.setAttribute("src", "heroRun1L.png");
		heroRun0R.setAttribute("src", "heroRun0R.png");
		heroRun1R.setAttribute("src", "heroRun1R.png");
	    heroPrepareAttackL.setAttribute("src", "heroPrepareAttackL.png");
		heroUnleashAttackL.setAttribute("src", "heroUnleashAttackL.png");
  		heroPrepareAttackR.setAttribute("src", "heroPrepareAttackR.png");
 		heroUnleashAttackR.setAttribute("src", "heroUnleashAttackR.png");
        heroCrouchIdleR.setAttribute("src", "heroCrouchIdleR.png");
		heroCrouchIdleL.setAttribute("src", "heroCrouchIdleL.png");
        heroCrouchPrepareAttackR.setAttribute("src", "heroCrouchPrepareAttackR.png");
		heroCrouchPrepareAttackL.setAttribute("src", "heroCrouchPrepareAttackL.png");
        heroCrouchUnleashAttackR.setAttribute("src", "heroCrouchUnleashAttackR.png");
        heroCrouchUnleashAttackL.setAttribute("src", "heroCrouchUnleashAttackL.png");
        jupiter0.setAttribute("src", "jupiterpower0.png");
        jupiter1.setAttribute("src", "jupiterpower1.png");
        jupiterL.setAttribute("src", "jupiterL.png");
        jupiterR.setAttribute("src", "jupiterR.png");
        heroProtectCrouchR.setAttribute("src", "heroCrouchPrepareAttackR.png");
        heroProtectStandR.setAttribute("src", "heroPrepareAttackR.png");
        heroProtectCrouchL.setAttribute("src", "heroCrouchPrepareAttackL.png");
        heroProtectStandL.setAttribute("src", "heroPrepareAttackL.png");
        enemyDeadR.setAttribute("src", "enemyDeadR.png");
        herofreedom.setAttribute("src", "freedom.png");
        rudiskeyboard.setAttribute("src", "rudiskeyboard.png");
        bloodRudis.setAttribute("src", "bloodRudis.png");
        healthimage.setAttribute("src", "health.png");
        blood.setAttribute("src", "blood0.png");
        wall.setAttribute("src", "DesolatedHut.png");
        torch.setAttribute("src", "Torch_Sheet.png");
		live.setAttribute("src", "live.png");







        fletxaL.setAttribute("src", "fireL.png");
        fletxaR.setAttribute("src", "fireR.png");


	    }
    }
function addLoadEvent(func) 
    {
	
		
	var oldonload = window.onload;
	if (typeof window.onload != 'function') 
        {
		window.onload = func;
	    } 
    else 
        {
    	window.onload = function() 
            {
			if (oldonload) 
                {
				oldonload();
			    }
			func();
		    }
    	}
    }


	
ScreenCompletedEmpty=new Array(360);

ScreenCompletedEmpty[0] = true; 
//////////////////////////////////////////////////////////	

var screenarray1=new Array(360);
for (var i=-100;i<460;i++) 
	{
	screenarray1[i]=new Array(360);
	}
for (var j=-100;j<460;j++) 
	{
	for (var i=-100;i<460;i++) 
    	{
	    screenarray1[j][i]=".";//formateja array
	    }
    }
j=60+128;
for (var i=150;i<250;i++) 
	{
    screenarray1[j][i]="p";//plataforma 1
    }
j=120+128;
for (var i=250;i<360;i++) 
	{
    screenarray1[j][i]="p";//plataforma 2
    } 
j=180+128; 
 for (var i=-100;i<460;i++) 
	{
    screenarray1[j][i]="p";//plataforma 3
    }
///////////////////////////////////////////////////////////////////////////////
var screenarray2=new Array(360);
for (var i=-100;i<460;i++) 
	{
	screenarray2[i]=new Array(360);
	}
for (var j=-100;j<460;j++) 
	{
	for (var i=-100;i<460;i++) 
    	{
	    screenarray2[j][i]=".";//formateja array
	    }
    }
j=180+128;
for (var i=-100;i<150;i++) 
	{
    screenarray2[j][i]="p";//plataforma 1
    }
j=180+128;
for (var i=250;i<460;i++) 
	{
    screenarray2[j][i]="p";//plataforma 2
    } 
j=120+128; 
 for (var i=150;i<250;i++) 
	{
    screenarray2[j][i]="p";//plataforma 3
    }
screenarray2[100+128][200]="h";
///////////////////////////////////////////////////////////////////
var screenarray3=new Array(360);
for (var i=-100;i<460;i++) 
	{
	screenarray3[i]=new Array(360);
	}
for (var j=-100;j<460;j++) 
	{
	for (var i=-100;i<460;i++) 
    	{
	    screenarray3[j][i]=".";//formateja array
	    }
    }
j=180+128;
for (var i=-100;i<460;i++) 
	{
    screenarray3[j][i]="p";//plataforma 1
    }
j=180+128;
for (var i=200;i<280;i++) 
	{
    screenarray3[j][i]=".";//plataforma 1
    }
j=60+128;
for (var i=250;i<460;i++) 
	{
    screenarray3[j][i]="p";//plataforma 2
    } 
j=120+128; 
 for (var i=150;i<250;i++) 
	{
    screenarray3[j][i]="p";//plataforma 3
    }
screenarray3[40+128][280]="h";
/////////////////////////////////////////////////////////////////////////
var screenarray4=new Array(360);
for (var i=-100;i<460;i++) 
	{
	screenarray4[i]=new Array(360);
	}
for (var j=-100;j<460;j++) 
	{
	for (var i=-100;i<460;i++) 
    	{
	    screenarray4[j][i]=".";//formateja array
	    }
    }
j=180+128;
for (var i=-100;i<460;i++) 
	{
    screenarray4[j][i]="p";//plataforma 1
    } 
j=120+128; 
 for (var i=150;i<250;i++) 
	{
    screenarray4[j][i]="p";//plataforma 2
    }
j=60+128; 
 for (var i=100;i<200;i++) 
	{
    screenarray4[j][i]="p";//plataforma 3
    }

j=0+128; 
 for (var i=50;i<150;i++) 
	{
    screenarray4[j][i]="p";//plataforma 4
    }
j=120+128; 
 for (var i=300;i<460;i++) 
	{
    screenarray4[j][i]="p";//plataforma 5
    }	
////////////////////////////


//timers
let NextStageIntervalHandle;
let jupiterIntervalHandle;

// CANVAS
var canvas = document.getElementById('canvas');
if (canvas.getContext) 
    {
    var ctx = canvas.getContext('2d');
    }




function buttonx()
        {
        if(jupiterbuttonreleased==false && jupiterbuttonpressed==true){setTimeout(loopxb,100);}else{buttonxn();}

        function loopxb()
            {
            go_left=false; go_right=false; crouch=false; attack=true; velocity_right=0; velocity_left=0; velocity_attack=2;run_animation_attack=0;power_jupiter=power_jupiter+0.2;     
	        if(Math.trunc(lastTimestamp/100) % 4){run_animation_jupiter=0;playerLoadingJupiter();}else{run_animation_jupiter=1;}
            if(jupiterbuttonreleased==false && jupiterbuttonpressed==true){setTimeout(loopxb,100);}else{buttonxn();}
            }
        }
function buttonxn()
{
        jupiterbuttonpressed=false;
        jupiterbuttonreleased=false;
        post_jupiter=true;
        velocity_attack=0;
        attack = false;	
		PlayerUnleashAttack("Jupiter"); 
}
function buttonz()
{

        if (crouch==true)//crouch z atack
            {
            go_left=false; go_right=false;attack=true; velocity_right=0; velocity_left=0; velocity_attack=1;
	        if(Math.trunc(lastTimestamp/200) % 2){run_animation_attack=0;}else{run_animation_attack=1;}       
            }
        else
            {//z attack
            go_left=false; go_right=false; crouch=false; attack=true; velocity_right=0; velocity_left=0; velocity_attack=1; ;      
	        

			if(Math.trunc(lastTimestamp/200) % 2)
			{
				run_animation_attack=0;
				PlayerUnleashAttack("Normal")

			}
			else
			{
				run_animation_attack=1;

			}       
            }
    if(zpressed==true)
        {
        window.setTimeout(buttonz,20);
        }
}
function buttonzn()
        {
zpressed=false;
        velocity_attack=0;
        attack = false;		
        }





function buttonleft()
        {
           if(screen<3 || (screen==3 && player_x<130))//rudis freedom
            {
        go_left=true;crouch=false;attack=false;go_right=false;velocity_right=0; velocity_left=1; velocity_attack=0;to_left=true;
        //if(run_animation_left==2){run_animation_left=0;}else{run_animation_left++;}
        if(Math.trunc(lastTimestamp/100) % 2){run_animation_left=0;}else{run_animation_left=1}
            }
        else{player_x=130;go_left=false;leftpressed=false;velocity_left=0;}
    if(leftpressed==true)
        {
        window.setTimeout(buttonleft,20);
        }

        }
function buttonleftn()
        {
        leftpressed=false;
        go_left=false;
        velocity_left=0;
        }
function buttonright()
        {
          if(screen<3 || (screen==3 && player_x<130))//rudis freedom
            { 
        go_left=false;go_right=true;crouch=false;attack=false;go_left=false; velocity_right=1; velocity_left=0; velocity_attack=0;to_left=false;
        if(Math.trunc(lastTimestamp/100) % 2){run_animation_right=0;}else{run_animation_right=1}
            }
          else{ player_x=130;go_right=false;rightpressed=false;velocity_right=0;}

    if(rightpressed==true)
        {
        window.setTimeout(buttonright,20);
        }

        }
function buttonrightn()
        {
        rightpressed=false;
        go_right=false;       
        velocity_right=0;

        }
function buttonup()
        {
        
        timebasejump=lastTimestamp;
        if(timebasejump+4000>lastTimestamp)jumping=true;else{jumping=false;timebasejump=0}
        }
function buttonupn()
    {
        jumping=false;timebasejump=0;
    }

function buttondown()
        {
        go_left=false;go_right=false;crouch=true;attack=false;go_left=false; velocity_right=0; velocity_left=0; velocity_attack=0;
	    }
function buttondownn()
        {
        crouch=false;  

        }





// KEYBOARD



document.onkeydown = checkKeyDown;
function checkKeyDown(e) 
    {
 
    if (e.keyCode == '37' ) 
        {
           if(screen<3 || (screen==3 && player_x<130))//rudis freedom
            {
        go_left=true;crouch=false;attack=false;go_right=false;velocity_right=0; velocity_left=1; velocity_attack=0;to_left=true;leftpressed=true;
        if(Math.trunc(lastTimestamp/100) % 2){run_animation_left=0;}else{run_animation_left=1}
            }
        }
    if (e.keyCode == '39' ) 
        { 
          if(screen<3 || (screen==3 && player_x<130))//rudis freedom
            { 
        go_left=false;go_right=true;crouch=false;attack=false;go_left=false; velocity_right=1; velocity_left=0; velocity_attack=0;to_left=false;rightpressed=true;
        if(Math.trunc(lastTimestamp/100) % 2){run_animation_right=0;}else{run_animation_right=1}
            }
          else player_x=130;
        }
    if (e.keyCode == '38' && timebasejump==0) //up cursor
        {
        
        timebasejump=lastTimestamp;
        if(timebasejump+4000>lastTimestamp)jumping=true;else{jumping=false;timebasejump=0}
        }
    if (e.keyCode == '40') //down cursor
        {
        go_left=false;go_right=false;crouch=true;attack=false;go_left=false; velocity_right=0; velocity_left=0; velocity_attack=0;
	    }
    if (e.keyCode == '88') //x attack
        {
        go_left=false; go_right=false; crouch=false; attack=true; velocity_right=0; velocity_left=0; velocity_attack=2;run_animation_attack=0;power_jupiter=power_jupiter+0.2;     
	    if(Math.trunc(lastTimestamp/100) % 2){run_animation_jupiter=0;playerLoadingJupiter();}else{run_animation_jupiter=1;}    

        } 
	
    if (e.keyCode == '90') //z attack
        {
        if (crouch==true)//crouch z atack
            {
            go_left=false; go_right=false;attack=true; velocity_right=0; velocity_left=0; velocity_attack=1;
	        if(Math.trunc(lastTimestamp/200) % 2){run_animation_attack=0;}else{run_animation_attack=1;}       
            }
        else
            {//z attack
            go_left=false; go_right=false; crouch=false; attack=true; velocity_right=0; velocity_left=0; velocity_attack=1; ;      
	        

			if(Math.trunc(lastTimestamp/200) % 2)
			{
				run_animation_attack=0;
				PlayerUnleashAttack("Normal")

			}
			else
			{
				run_animation_attack=1;

			}       
            }
        }
    if (e.keyCode == '67') //c Protect
        {
        protect = true;
 		
        }				
		
		
		
    if (e.keyCode == '13' && gameover==false  && screen==-1) //enter
        {
        restart();
        SetSpecificStage(-0.5);
        }
    
if (e.keyCode == '13' && gameover==true && screen==-2) //enter
        {
        restart();
        }
    
    }
document.onkeyup = checkKeyUp;
//ON RELASE
function checkKeyUp(e) 
    {
    if (e.keyCode == '37') //left cursor
        {
        leftpressed=false;
        go_left=false;
        velocity_left=0;
        }
    if (e.keyCode == '39') //right cursor
        { 
        rightpressed=false;
        go_right=false;       
        velocity_right=0;
        }
    if (e.keyCode == '38') //up cursor
        {
        jumping=false;timebasejump=0;
        }
    if (e.keyCode == '40') //down cursor
        {
        crouch=false;  
        }
    if (e.keyCode == '88') //x
        {

        post_jupiter=true;
        velocity_attack=0;
        attack = false;	
		PlayerUnleashAttack("Jupiter"); 	
        }
    if (e.keyCode == '90') //z
        {


        velocity_attack=0;
        attack = false;		
        }
    if (e.keyCode == '67') //c Protect
        {
        protect = false; 
        }		
		
		
		
    if (e.keyCode == '13') //enter
        {
        
        }
    }
	
function draw(timestamp) 
    {	
    requestAnimationFrame(draw);
    deltaTime = (timestamp - lastTimestamp) / perfectFrameTime;


	if (heroHealth<=0){gameover=true;screen=-2}	
    if (EnemyArcherHealth<=0 && screen==1)     
        {
		if( NextStageIntervalHandle == null )
		{

		}
		
		
        fightmode=false;

        }	

    ctx.beginPath();


//gravitys/jumps
if(screen>-1)
playergravity();
if(screen>-1)
actorsgravity();

    if( actorsIngame.indexOf(EnemyArcher1) > -1 || actorsIngame.indexOf(EnemyArcher2) > -1 || actorsIngame.indexOf(EnemyArcher3) > -1 ) 
        {
if (player_x>295)player_x=295;
if (player_x<-85)player_x=-85;
        }
    else
        {
    // salt de pantalles  
    if(screen==-0.5 && player_x>340 && fightmode==false) {SetSpecificStage(0);player_x=-30;fightmode=false}
    if(screen==0 && player_x<-50 && fightmode==false){SetSpecificStage(-0.5);player_x=330;fightmode=false;}
    if(screen==0 && player_x>340 && fightmode==false){SetSpecificStage(1);player_x=-30;fightmode=false;}
    if(screen==1 && player_x<-50 && fightmode==false){SetSpecificStage(0);player_x=330;fightmode=false;}
    if(screen==1 && player_x>340 && fightmode==false){SetSpecificStage(2);player_x=-30;fightmode=false;}
    if(screen==2 && player_x<-50 && fightmode==false){SetSpecificStage(1);player_x=330;fightmode=false;}
    if(screen==2 && player_x>340 && fightmode==false){SetSpecificStage(3);player_x=-30;fightmode=false;}
    if(screen==3 && player_x<-50 && fightmode==false){SetSpecificStage(2);player_x=330;fightmode=false;}
    /*if(screen==3 && player_x>340 && fightmode==false){SetSpecificStage(4);player_x=-30;fightmode=false;}
    if(screen==4 && player_x<-50 && fightmode==false){SetSpecificStage(3);player_x=330;fightmode=false;}
    if(screen==4 && player_x>340 && fightmode==false){SetSpecificStage(5);player_x=-30;fightmode=false;}
    if(screen==5 && player_x<-50 && fightmode==false){SetSpecificStage(4);player_x=330;fightmode=false;}
    if(screen==5 && player_x>340 && fightmode==false){SetSpecificStage(6);player_x=-30;fightmode=false;}
    if(screen==6 && player_x<-50 && fightmode==false){SetSpecificStage(5);player_x=330;fightmode=false;}
    if(screen==6 && player_x>340 && fightmode==false){SetSpecificStage(7);player_x=-30;fightmode=false;}
    if(screen==7 && player_x<-50 && fightmode==false){SetSpecificStage(6);player_x=330;fightmode=false;}
    if(screen==7 && player_x>340 && fightmode==false){SetSpecificStage(8);player_x=-30;fightmode=false;}
    if(screen==8 && player_x<-50 && fightmode==false){SetSpecificStage(7);player_x=330;fightmode=false;}*/
        }
    
    
    
    //pantalles
    if(screen==-2)
        {
     for (i=0;i<4;i++)
        {
        for(j=0;j<4;j++)
            {
            ctx.drawImage(wall,0,0,500,500,0*i,0*j,90,90);
            ctx.drawImage(wall,0,0,500,500,90*i,0*j,90,90);
            ctx.drawImage(wall,0,0,500,500,0*i,90*j,90,90);
            ctx.drawImage(wall,0,0,500,500,90*i,90*j,90,90);
            }
        }

        ctx.fillStyle = 'white';
        ctx.font = "30px arial";
        ctx.fillText("Game over", 10, 160);
        ctx.fillText("Press enter to start", 10, 345);
        
        }
    if(screen==-1)
        {
     for (i=0;i<4;i++)
        {
        for(j=0;j<4;j++)
            {
            ctx.drawImage(wall,0,0,500,500,0*i,0*j,90,90);
            ctx.drawImage(wall,0,0,500,500,90*i,0*j,90,90);
            ctx.drawImage(wall,0,0,500,500,0*i,90*j,90,90);
            ctx.drawImage(wall,0,0,500,500,90*i,90*j,90,90);
            }
        }
        ctx.drawImage(bloodRudis,0,0,360,100,0,0,360,100);
        ctx.drawImage(rudiskeyboard,0,0,128,128,260,160,128,128);
        ctx.fillStyle = 'white';
        ctx.font = "30px arial";
        ctx.fillText("Controls:", 10, 130);
        ctx.font = "20px arial";
        ctx.fillText("up arrow -> levitation/jump", 10, 155);
        ctx.fillText("down arrow -> crouch", 10, 175);
        ctx.fillText("left arrow -> walk to left", 10, 195);
        ctx.fillText("right arrow -> walk to right", 10, 215);
        ctx.fillText("z -> attack", 10, 235);
        ctx.fillText("x -> jupiter attack", 10, 255);
        ctx.fillText("c -> protect", 10, 275);
        ctx.fillText("escape -> leave game", 10, 295);
        ctx.font = "30px arial";
        ctx.fillText("Press enter to start", 10, 345);
        
        }

     if(screen>-1)
     {

     for (i=0;i<4;i++)
        {
        for(j=0;j<4;j++)
            {
            ctx.drawImage(wall,0,0,500,500,0*i,0*j,90,90);
            ctx.drawImage(wall,0,0,500,500,90*i,0*j,90,90);
            ctx.drawImage(wall,0,0,500,500,0*i,90*j,90,90);
            ctx.drawImage(wall,0,0,500,500,90*i,90*j,90,90);

            }
        }

ctx.drawImage(torch,32*i,32*j,32,32,270-32,100,32,32);
ctx.drawImage(torch,32*i,32*j,32,32,90,100,32,32);


     }  
     
     
     if(screen==-0.5)
        {

		for (var j=0;j<360;j++) 
		{
			for (var i=0;i<360;i++) 
			{
				if (screenarray1[j][i]=="p"){ctx.fillStyle = 'brown';ctx.fillRect(i,j,1,10);}
			}
		}



        }  
        
    if(screen==0)
        {

		for (var j=0;j<360;j++) 
		{
			for (var i=0;i<360;i++) 
			{
				if (screenarray2[j][i]=="p"){ctx.fillStyle = 'brown';ctx.fillRect(i,j,1,10);}
				if (screenarray2[j][i]=="h" && botiquin0_agafat==false){ctx.drawImage(healthimage,0,0,20,20,i,j,20,20);}
			}
		}   	
	    if (player_x+64>90+128 && player_y+128>=240 && player_y+128<260 && botiquin0_agafat==false){audiohup.play();heroHealth=100;screenarray2[100+128][200]=".";botiquin0_agafat=true}


        }
     if(screen==1)                      
        {

		for (var j=0;j<360;j++) 
		{
			for (var i=0;i<360;i++) 
			{
				if (screenarray3[j][i]=="p"){ctx.fillStyle = 'brown';ctx.fillRect(i,j,1,10);}
				if (screenarray3[j][i]=="h"&& botiquin1_agafat==false){ctx.drawImage(healthimage,0,0,20,20,i,j,20,20);}
				
			}
		} 
        if (player_x+64>150+128 && player_y+128>=180 && player_y+128<200 && botiquin1_agafat==false){audiohup.play();heroHealth=100;screenarray3[40+128][280]=".";botiquin1_agafat=true}

	
        } 		
     if(screen==2)
        {
 		for (var j=0;j<360;j++) 
		{
			for (var i=0;i<360;i++) 
			{
				if (screenarray4[j][i]=="p"){ctx.fillStyle = 'brown';ctx.fillRect(i,j,1,10);}

			}
		}   	

	
        } 
     if(screen==3)
        {

		for (var j=0;j<360;j++) 

		{
			for (var i=0;i<360;i++) 
			{
				if (screenarray1[j][i]=="p"){ctx.fillStyle = 'brown';ctx.fillRect(i,j,1,10);}
                
			}
		}  

	
        } 
     if(screen==4)
        {

        } 

	if(screen>-1)
	{
	
		actorsIngame.forEach(DrawActors);
		function DrawActors(value, index, array) 
		{
			ctx.drawImage(value.InternalTexture,0,0,128,128,value.x,value.y,128,128);
			value.ActorTick();
			

			if( value.constructor.name  == "Pawn" )  //To know if is projectile
			{
			    if( !bIsOnFloorAlready(value) ) 
				{

					
					if( value.name == "EnemyArcherExtra1") 
					{

						value.y = Archer1actor_y;
						Archer1actor_x=value.x; 
						
					} 
					if( value.name == "EnemyArcherExtra2") 
					{
						value.y = Archer2actor_y;
				Archer2actor_x=value.x; 	
					}
					if( value.name == "EnemyArcherExtra3") 
					{
						value.y = Archer3actor_y;
									Archer3actor_x=value.x; 	
					}
				}
			}			
			
			if( value.constructor.name  == "Projectile" )  //To know if is projectile
			{
			   value.x += value.ProjectileInitSpeedX/100; 
			}

			if( value.constructor.name  == "Knife" ||  value.constructor.name  == "Pickup" ||  value.constructor.name  == "Rudis"   )  //To know if is projectile
			{
			    if( !KnifeIsOnFloorAlready(value) ) 
				{
					value.y = value.y + 4; 
				}
			}

		}		
		
	
	}
	
  if(fightmode==true)
   	{

    //enemy
    //if(screen==0 && enemy_x>=player_x){ctx.drawImage(archer,0,0,128,128,enemy_x,enemy_y,128,128);} 
    //if(screen==0 && enemy_x<player_x){ctx.drawImage(archerR,0,0,128,128,enemy_x,enemy_y,128,128);}
 
    //player
    if(screen>-1 && crouch==false && attack==false && protect==false && go_left==false && go_right==false && velocity_right==0 && post_jupiter==false && enemy_x>=player_x) 
    {ctx.drawImage(hero,0,0,128,128,player_x,player_y,128,128)} //idle

    if(screen>-1 && crouch==false && attack==false && protect==false && go_left==false && go_right==false && velocity_right==0 && post_jupiter==false && enemy_x<player_x) 
    {ctx.drawImage(herol,0,0,128,128,player_x,player_y,128,128)} //idle


    if(screen>-1 && velocity_right==1 && run_animation_right==0 && attack==false && go_left==false && crouch==false && go_right==true && post_jupiter==false){ctx.drawImage(herowf1,0,0,128,128,player_x,player_y,128,128);} //walk right
    
    if(screen>-1 && velocity_right==1 && run_animation_right==1 && attack==false && go_left==false && crouch==false && go_right==true && post_jupiter==false){ctx.drawImage(herowf2,0,0,128,128,player_x,player_y,128,128);} //walk right
    
    if(screen>-1 && velocity_left==1 && run_animation_left==1 && attack==false && go_left==true && crouch==false && go_right==false && post_jupiter==false){ctx.drawImage(herowfl2,0,0,128,128,player_x,player_y,128,128);} //walk left
    
    if(screen>-1 && velocity_left==1 && run_animation_left==0 && attack==false && go_left==true && crouch==false && go_right==false && post_jupiter==false){ctx.drawImage(herowfl3,0,0,128,128,player_x,player_y,128,128);} //walk left
    //crouch atack z right
    if(screen>-1 && velocity_attack==1 && run_animation_attack==0 && attack==true && go_left==false && crouch==true && go_right==false && post_jupiter==false && enemy_x>=player_x){ctx.drawImage(heroCrouchPrepareAttackR,0,0,128,128,player_x,player_y,128,128);} //crouch attack z 
    if(screen>-1 && velocity_attack==1 && run_animation_attack==1 && attack==true && go_left==false && crouch==true && go_right==false && post_jupiter==false && enemy_x>=player_x){ctx.drawImage(heroCrouchUnleashAttackR,0,0,128,128,player_x,player_y,128,128);} //crouch attack z 
    //crouch atack z left 
    if(screen>-1 && velocity_attack==1 && run_animation_attack==0 && attack==true && go_left==false && crouch==true && go_right==false && post_jupiter==false && enemy_x<player_x){ctx.drawImage(heroCrouchPrepareAttackL,0,0,128,128,player_x,player_y,128,128);} //crouch attack z 
    if(screen>-1 && velocity_attack==1 && run_animation_attack==1 && attack==true && go_left==false && crouch==true && go_right==false && post_jupiter==false && enemy_x<player_x){ctx.drawImage(heroCrouchUnleashAttackL,0,0,128,128,player_x,player_y,128,128);} //crouch attack z 
    //attack z right
    if(screen>-1 && velocity_attack==1 && run_animation_attack==0 && attack==true && go_left==false && crouch==false && go_right==false && post_jupiter==false && enemy_x>=player_x){ctx.drawImage(heroUnleashAttackR,0,0,128,128,player_x,player_y,128,128);} //attack z
   
    if(screen>-1 && velocity_attack==1 && run_animation_attack==1 && attack==true && go_left==false && crouch==false && go_right==false && post_jupiter==false && enemy_x>=player_x){ctx.drawImage(heroPrepareAttackR,0,0,128,128,player_x,player_y,128,128);} //attack z 
    //attack z left
    if(screen>-1 && velocity_attack==1 && run_animation_attack==0 && attack==true && go_left==false && crouch==false && go_right==false && post_jupiter==false && enemy_x<player_x){ctx.drawImage(heroPrepareAttackL,0,0,128,128,player_x,player_y,128,128);   } //attack z
   
    if(screen>-1 && velocity_attack==1 && run_animation_attack==1 && attack==true && go_left==false && crouch==false && go_right==false && post_jupiter==false && enemy_x<player_x){ctx.drawImage(heroPrepareAttackL,0,0,128,128,player_x,player_y,128,128);} //attack z     
   
   // jupiter power prepare attack 
   if(screen>-1 && velocity_attack==2 && run_animation_attack==0 && attack==true && go_left==false && crouch==false && go_right==false && post_jupiter==false && enemy_x<player_x){ctx.drawImage(heroPrepareAttackL,0,0,128,128,player_x,player_y,128,128);} //prepare attack x (jupiter power)
   // jupiter power prepare attack left
   if(screen>-1 && velocity_attack==2 && run_animation_attack==0 && attack==true && go_left==false && crouch==false && go_right==false && post_jupiter==false && enemy_x>=player_x){ctx.drawImage(heroPrepareAttackR,0,0,128,128,player_x,player_y,128,128);} //prepare attack x (jupiter power)      
   //jupiter power     
   if(screen>-1 && velocity_attack==2 && run_animation_attack==0 && run_animation_jupiter==0 && attack==true && go_left==false && crouch==false && go_right==false && post_jupiter==false){ctx.drawImage(jupiter0,0,0,128,256,player_x,player_y-94,128,256);} //(attack x) + jupiter   
   if(screen>-1 && velocity_attack==2 && run_animation_attack==0 && run_animation_jupiter==1 && attack==true && go_left==false && crouch==false && go_right==false && post_jupiter==false){ctx.drawImage(jupiter1,0,0,128,256,player_x,player_y-94,128,256);} //(attack x) + jupiter  
   // post jupiter power attack x
   if(screen>-1 && post_jupiter==true && go_left==false && crouch==false && go_right==false && enemy_x>=player_x){ctx.drawImage(jupiterR,0,0,128,128,player_x,player_y,128,128);setTimeout(function(){post_jupiter=false;power_jupiter=0},800)} //attack x (post jupiter power)
   // post jupiter power attack x left
   if(screen>-1 && post_jupiter==true && go_left==false && crouch==false && go_right==false && enemy_x<player_x){ctx.drawImage(jupiterL,0,0,128,128,player_x,player_y,128,128);setTimeout(function(){post_jupiter=false;power_jupiter=0},800)} //attack x (post jupiter power)
   //crouch idle right
   if(screen>-1 && crouch==true && attack==false && go_left==false && go_right==false && post_jupiter==false && enemy_x>=player_x) {ctx.drawImage(heroCrouchIdleR,0,0,128,128,player_x,player_y,128,128)} //crouch idle
   //crouch idle left
   if(screen>-1 && crouch==true && attack==false && go_left==false && go_right==false && post_jupiter==false && enemy_x<player_x) {ctx.drawImage(heroCrouchIdleL,0,0,128,128,player_x,player_y,128,128)} //crouch idle
   //Protect 
   if(screen>-1 && crouch==false && protect==true && attack==false && go_left==false && go_right==false && post_jupiter==false && enemy_x>=player_x) {ctx.drawImage(heroProtectStandR,0,0,128,128,player_x,player_y,128,128)} //standing
    //Protect Left
   if(screen>-1 && crouch==false && protect==true && attack==false && go_left==false && go_right==false && post_jupiter==false && enemy_x<player_x) {ctx.drawImage(heroProtectStandL,0,0,128,128,player_x,player_y,128,128)} //standing
   //Protect crouch
   if(screen>-1 && crouch==true && protect==true && attack==false && go_left==false && go_right==false && post_jupiter==false && enemy_x>=player_x) {ctx.drawImage(heroProtectCrouch,0,0,128,128,player_x,player_y,128,128)} //standing
    //Protect Leftcrouch
   if(screen>-1 && crouch==true && protect==true && attack==false && go_left==false && go_right==false && post_jupiter==false && enemy_x<player_x) {ctx.drawImage(heroProtectCrouchL,0,0,128,128,player_x,player_y,128,128)} //standing
  }
  
  
  
  
  
  else
   { 

	if( go_right && rightpressed && !IsOnExtremOfPantalla("Player", null, false )  )
	{  player_x+=2;  } 	
	
	
	//
	if( go_left && leftpressed && !IsOnExtremOfPantalla("Player", null, true )  )
	{  player_x-=2; } 


    //enemy
    //if(screen==0 && enemy_x>=player_x && EnemyArcherHealth>0){ctx.drawImage(enemyL,0,0,128,128,enemy_x,enemy_y,128,128);} 
    //if(screen==0 && enemy_x<player_x && EnemyArcherHealth>0){ctx.drawImage(enemyR,0,0,128,128,enemy_x,enemy_y,128,128);} 

    //if(screen==0 && EnemyArcherHealth<=0){ctx.drawImage(enemyDeadR,0,0,128,128,enemy_x,enemy_y,128,128);} 
    //player
if(screen<3 || (screen==3 && player_x<130))
    {
    if(screen>-1 && crouch==false && attack==false && protect==false && go_left==false && go_right==false && velocity_right==0 && post_jupiter==false && to_left==false) 
    {ctx.drawImage(heroIldeR,0,0,128,128,player_x,player_y,128,128)} //idle

    if(screen>-1 && crouch==false && attack==false && protect==false && go_left==false && go_right==false && velocity_right==0 && post_jupiter==false && to_left==true) 
    {ctx.drawImage(heroIldeL,0,0,128,128,player_x,player_y,128,128)} //idle
    }
if((screen==3 && player_x>=130))//rudisfreedom
    {
    if (actorsIngame.indexOf(VictoryRudis) > -1)//rudisfreedom
        {
        DestroySpecificActorOfTheWorld(VictoryRudis);
        }
    ctx.drawImage(herofreedom,0,0,128,128,player_x,player_y,128,128)//rudisfreedom
    if(freedomplayable){freedom.play();freedomplayable=false;}
    ctx.fillStyle = 'white';
    ctx.font = "40px arial";
    ctx.fillText("Stage 1", 119, 120); 
    ctx.fillText("Completed!", 85, 160);
    setTimeout(function(){/*establir variables per saltar de pantalla*/SetSpecificStage(4);player_x=-30;fightmode=false;},5000);
    }
    if(screen>-1 && velocity_right==1 && run_animation_right==0 && attack==false && go_left==false && crouch==false && go_right==true && post_jupiter==false){ctx.drawImage(heroRun0R,0,0,128,128,player_x,player_y,128,128);} //walk right
    
    if(screen>-1 && velocity_right==1 && run_animation_right==1 && attack==false && go_left==false && crouch==false && go_right==true && post_jupiter==false){ctx.drawImage(heroRun1R,0,0,128,128,player_x,player_y,128,128);} //walk right
    
    if(screen>-1 && velocity_left==1 && run_animation_left==1 && attack==false && go_left==true && crouch==false && go_right==false && post_jupiter==false){ctx.drawImage(heroRun0L,0,0,128,128,player_x,player_y,128,128);} //walk left
    
    if(screen>-1 && velocity_left==1 && run_animation_left==0 && attack==false && go_left==true && crouch==false && go_right==false && post_jupiter==false){ctx.drawImage(heroRun1L,0,0,128,128,player_x,player_y,128,128);} //walk left
    //crouch atack z right
    if(screen>-1 && velocity_attack==1 && run_animation_attack==0 && attack==true && go_left==false && crouch==true && go_right==false && post_jupiter==false && to_left==false){ctx.drawImage(heroCrouchPrepareAttackR,0,0,128,128,player_x,player_y,128,128);} //crouch attack z 
    if(screen>-1 && velocity_attack==1 && run_animation_attack==1 && attack==true && go_left==false && crouch==true && go_right==false && post_jupiter==false && to_left==false){ctx.drawImage(heroCrouchUnleashAttackR,0,0,128,128,player_x,player_y,128,128);} //crouch attack z 
    //crouch atack z left 
    if(screen>-1 && velocity_attack==1 && run_animation_attack==0 && attack==true && go_left==false && crouch==true && go_right==false && post_jupiter==false && to_left==true){ctx.drawImage(heroCrouchPrepareAttackL,0,0,128,128,player_x,player_y,128,128);} //crouch attack z 
    if(screen>-1 && velocity_attack==1 && run_animation_attack==1 && attack==true && go_left==false && crouch==true && go_right==false && post_jupiter==false && to_left==true){ctx.drawImage(heroCrouchUnleashAttackL,0,0,128,128,player_x,player_y,128,128);} //crouch attack z 
    //attack z right
    if(screen>-1 && velocity_attack==1 && run_animation_attack==0 && attack==true && go_left==false && crouch==false && go_right==false && post_jupiter==false && to_left==false){ctx.drawImage(heroUnleashAttackR,0,0,128,128,player_x,player_y,128,128);} //attack z
   
    if(screen>-1 && velocity_attack==1 && run_animation_attack==1 && attack==true && go_left==false && crouch==false && go_right==false && post_jupiter==false && to_left==false){ctx.drawImage(heroPrepareAttackR,0,0,128,128,player_x,player_y,128,128);} //attack z 
    //attack z left
    if(screen>-1 && velocity_attack==1 && run_animation_attack==0 && attack==true && go_left==false && crouch==false && go_right==false && post_jupiter==false && to_left==true){ctx.drawImage(heroPrepareAttackL,0,0,128,128,player_x,player_y,128,128);} //attack z
   
    if(screen>-1 && velocity_attack==1 && run_animation_attack==1 && attack==true && go_left==false && crouch==false && go_right==false && post_jupiter==false && to_left==true){ctx.drawImage(heroUnleashAttackL,0,0,128,128,player_x,player_y,128,128);} //attack z     
   
   // jupiter power prepare attack 
   if(screen>-1 && velocity_attack==2 && run_animation_attack==0 && attack==true && go_left==false && crouch==false && go_right==false && post_jupiter==false && to_left==true){ctx.drawImage(heroPrepareAttackL,0,0,128,128,player_x,player_y,128,128);} //prepare attack x (jupiter power)
   // jupiter power prepare attack left
   if(screen>-1 && velocity_attack==2 && run_animation_attack==0 && attack==true && go_left==false && crouch==false && go_right==false && post_jupiter==false && to_left==false){ctx.drawImage(heroPrepareAttackR,0,0,128,128,player_x,player_y,128,128);} //prepare attack x (jupiter power)      
   //jupiter power     
   if(screen>-1 && velocity_attack==2 && run_animation_attack==0 && run_animation_jupiter==0 && attack==true && go_left==false && crouch==false && go_right==false && post_jupiter==false){ctx.drawImage(jupiter0,0,0,128,256,player_x,player_y-94,128,256);} //(attack x) + jupiter   
   if(screen>-1 && velocity_attack==2 && run_animation_attack==0 && run_animation_jupiter==1 && attack==true && go_left==false && crouch==false && go_right==false && post_jupiter==false){ctx.drawImage(jupiter1,0,0,128,256,player_x,player_y-94,128,256);} //(attack x) + jupiter  
   // post jupiter power attack x
   if(screen>-1 && post_jupiter==true && crouch==false && to_left==false){ctx.drawImage(jupiterR,0,0,128,128,player_x,player_y,128,128);setTimeout(function(){post_jupiter=false;power_jupiter=0},800)} //attack x (post jupiter power)
   // post jupiter power attack x left
   if(screen>-1 && post_jupiter==true && crouch==false  && to_left==true){ctx.drawImage(jupiterL,0,0,128,128,player_x,player_y,128,128);setTimeout(function(){post_jupiter=false;power_jupiter=0},800)} //attack x (post jupiter power)
   //crouch idle right
   if(screen>-1 && crouch==true && attack==false && go_left==false && go_right==false && post_jupiter==false && to_left==false && protect==false) {ctx.drawImage(heroCrouchIdleR,0,0,128,128,player_x,player_y,128,128)} //crouch idle
   //crouch idle left
   if(screen>-1 && crouch==true && attack==false && go_left==false && go_right==false && post_jupiter==false && to_left==true && protect==false) {ctx.drawImage(heroCrouchIdleL,0,0,128,128,player_x,player_y,128,128)} //crouch idle
   //Protect 
   if(screen>-1 && crouch==false && protect==true && attack==false && go_left==false && go_right==false && post_jupiter==false && to_left==false) {ctx.drawImage(heroProtectStandR,0,0,128,128,player_x,player_y,128,128)} //standing
    //Protect Left
   if(screen>-1 && crouch==false && protect==true && attack==false && go_left==false && go_right==false && post_jupiter==false && to_left==true) {ctx.drawImage(heroProtectStandL,0,0,128,128,player_x,player_y,128,128)} //standing
   //Protect crouch
   if(screen>-1 && crouch==true && protect==true && attack==false && go_left==false && go_right==false && post_jupiter==false && to_left==false) {ctx.drawImage(heroProtectCrouchR,0,0,128,128,player_x,player_y,128,128)} //crouch
    //Protect Leftcrouch
   if(screen>-1 && crouch==true && protect==true && attack==false && go_left==false && go_right==false && post_jupiter==false && to_left==true) {ctx.drawImage(heroProtectCrouchL,0,0,128,128,player_x,player_y,128,128)} //crouch
   }

    //xivatos de variables
   if(screen>-1)
        {
/*      ctx.fillStyle = 'white';
        ctx.font = "20px arial";
        ctx.fillText("screen:" + screen, 10, 20);
        ctx.fillText("power_jupiter:" + power_jupiter, 10, 40);
*/
		}
//////////////////////////////////////////////////////////       
		if(screen > -1 ) 
		{
	    ctx.drawImage(live,0,0,1.5*heroHealth, 150,        0+10 ,0 , 1.5*heroHealth,150);
	    //ctx.drawImage(live,0,0,1.5*EnemyArcherHealth,150,   180+20,0,1.5*EnemyArcherHealth,150);
        ctx.fillStyle = 'white';
        ctx.font = "20px arial";
        ctx.fillText("Hero", 10, 18);
	    //ctx.fillText("Boss", 305, 18);
        ctx.fillText("Jupiter power:" + power_jupiter, 10, 38);
		}
	lastTimestamp = timestamp;	
    }




function playergravity()
{

             if(screen==-0.5){screenArrayNext=screenarray1[player_y-1+120][player_x+64];}
            if(screen==0){screenArrayNext=screenarray2[player_y-1+120][player_x+64];}
            if(screen==1){screenArrayNext=screenarray3[player_y-1+120][player_x+64];}
            if(screen==2){screenArrayNext=screenarray4[player_y-1+120][player_x+64];}
            if(screen==3){screenArrayNext=screenarray1[player_y-1+120][player_x+64];}  
     if (screenArrayNext!="p" && jumping==false && player_y<359){player_y=player_y+1;}
    if (player_y>0 && jumping==true){player_y=player_y-1; }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function actorsgravity()
{
            if(Archer1actor_y>340){Archer1actor_y=340;}
            if(Archer2actor_y>340){Archer2actor_y=340;}
            if(Archer3actor_y>340){Archer3actor_y=340;}
            if(screen==-0.5){Archer1NextScreenArray=screenarray1[Archer1actor_y-1+120][Archer1actor_x+64];}
            if(screen==0){Archer1NextScreenArray=screenarray2[Archer1actor_y-1+120][Archer1actor_x+64];}
            if(screen==0){Archer2NextScreenArray=screenarray2[Archer2actor_y-1+120][Archer2actor_x+64];}
            //if(screen==0){Archer3NextScreenArray=screenarray2[Archer3actor_y-1+120][Archer3actor_x+64];}
            if(screen==1){Archer1NextScreenArray=screenarray3[Archer1actor_y-1+120][Archer1actor_x+64];}
            if(screen==1){Archer2NextScreenArray=screenarray3[Archer2actor_y-1+120][Archer2actor_x+64];}
            if(screen==1){Archer3NextScreenArray=screenarray3[Archer3actor_y-1+120][Archer3actor_x+64];}
            //parar de "saltar" si cal
            if(screen==2 && desiredActor1yprevious!=desiredActor1y && desiredActor1y>Archer1actor_y && desiredActor1y!=undefined && Archer1jump==true){Archer1jump=false;desiredActor1y=undefined;desiredActor1yprevious=undefined;}
            if(screen==2 && desiredActor2yprevious!=desiredActor2y && desiredActor2y>Archer2actor_y && desiredActor2y!=undefined && Archer2jump==true){Archer2jump=false;desiredActor2y=undefined;desiredActor2yprevious=undefined;}
            if(screen==2 && desiredActor3yprevious!=desiredActor3y && desiredActor3y>Archer3actor_y && desiredActor3y!=undefined && Archer3jump==true){Archer3jump=false;desiredActor3y=undefined;desiredActor3yprevious=undefined;}
            //gravetat
            if(screen==2 && Archer1jump==false){Archer1NextScreenArray=screenarray4[Archer1actor_y-1+120][Archer1actor_x+64];}
            if(screen==2 && Archer2jump==false){Archer2NextScreenArray=screenarray4[Archer2actor_y-1+120][Archer2actor_x+64];}
            if(screen==2 && Archer3jump==false){Archer3NextScreenArray=screenarray4[Archer3actor_y-1+120][Archer3actor_x+64];}
            //decidir si saltar
            if(screen==2)
                {
                for(i=Archer1actor_y-1+120;i>0;i--)
                    {
                    if(screenarray4[i][Archer1actor_x+64]=="p"){Archer1jump=true;desiredActor1y=i-190;}
                    }
                }
            if(screen==2)
                {
                for(i=Archer2actor_y-1+120;i>0;i--)
                    {
                    if(screenarray4[i][Archer2actor_x+64]=="p"){Archer2jump=true;desiredActor2y=i-190;}
                    }
                }
            if(screen==2)
                {
                for(i=Archer3actor_y-1+120;i>0;i--)
                    {
                    if(screenarray4[i][Archer3actor_x+64]=="p"){Archer3jump=true;desiredActor3y=i-190;}
                    }
                }
            //desar salt dejitjat per si a la propera volta no ha cambiat
            if(Archer1jump==true)desiredActor1yprevious=desiredActor1y;
            if(Archer2jump==true)desiredActor2yprevious=desiredActor2y;
            if(Archer3jump==true)desiredActor3yprevious=desiredActor3y;
    if (Archer1NextScreenArray!="p" && Archer1actor_y<359 && Archer1jump==false){Archer1actor_y=Archer1actor_y+1;}
    if (Archer2NextScreenArray!="p" && Archer2actor_y<359 && Archer2jump==false){Archer2actor_y=Archer2actor_y+1;}
    if (Archer3NextScreenArray!="p" && Archer3actor_y<359 && Archer3jump==false){Archer3actor_y=Archer3actor_y+1;}
    if (Archer1jump==true && desiredActor1y<Archer1actor_y){Archer1actor_y=Archer1actor_y-1;}
    if (Archer2jump==true && desiredActor2y<Archer2actor_y){Archer2actor_y=Archer2actor_y-1;}
    if (Archer3jump==true && desiredActor3y<Archer3actor_y){Archer3actor_y=Archer3actor_y-1;}
Archer1jump=false;
Archer2jump=false;
Archer3jump=false;
}


	
	

function takeDamage(PCharacter, PDamageAmount)
{
	
	if( PCharacter == "Hero")
	{
		heroHealth = heroHealth - PDamageAmount;
		spawnActor('PlayerBloodParticle', player_x, player_y, 1, "blood0.png", "Particle");   //actor 0		
	}		
		
	if( PCharacter == "EnemyArcher") 
	{
		EnemyArcherHealth = EnemyArcherHealth - PDamageAmount;
		spawnActor('EnemyBloodParticle', enemy_x, enemy_y, 2, "blood1.png", "Particle");   //actor 0
		
		if(EnemyArcherHealth < 0)
		{
			FirstBossDeadEvent();	
		}
        			
	}
	
}

function DoesArrowCollideWithAnyone()
{
	if( player_x - arrow_x >-50 && player_x - arrow_x < 50) 
	{
	return true;	  			
	}
	else
	{
	return false;			
	}

return true; 
}

function DoesPlayerIsInAttackProximity()
{
	
	if( player_x - enemy_x >-50 && player_x - enemy_x < 50) 
	{
	return true;				
	}
	else
	{
	return false;			
	}
	
return true; 
}
function DoesSwordCollideWithAnyone()
{
	if(player_x - enemy_x >-100 && player_x - enemy_x < 0  && attack==true && post_jupiter==false) 
	{
	return true;	  			
	}
	else
	{
	return false;			
	}

return true; 
}
function DoesJupiterCollideWithAnyone()
{
	if(player_x - enemy_x >-100 && player_x - enemy_x < 0  && power_jupiter>0 && post_jupiter==true) 
	{
	return true;	  			
	}
	else
	{
	return false;			
	}

return true; 
}
function DoesArrowCollideWithAnyoneInvertedOrder()
{
	if( -player_x + arrow_x >-50 && -player_x + arrow_x < 50)
	{
	return true;	  			
	}
	else
	{
	return false;			
	}

return true; 
}

function DoesPlayerIsInAttackProximityInvertedOrder()
{
	
	if( -player_x + enemy_x >-50 && -player_x + enemy_x < 50) 
	{
	return true;				
	}
	else
	{
	return false;			
	}
	
return true; 
}
function DoesSwordCollideWithAnyoneInvertedOrder()
{
	if( -player_x + enemy_x >-100 && -player_x + enemy_x < 0  && attack==true && post_jupiter==false) 
	{
	return true;	  			
	}
	else
	{
	return false;			
	}

return true; 
}



function DoesCollideXYWithXY( X1, Y1, X2, Y2, Size1, Size2 ) 
{



		if( Math.abs( Math.abs(X1) - Math.abs(X2) ) < Size1 + Size2 ) 
		{
			if( Math.abs( Math.abs(Y1) - Math.abs(Y2) ) < Size1 + Size2 ) 
			{
				return true;
			}			
			
		}
		
		
}


function InterpolateNumbers(ActualNumber, InterpSpeed, FinalNumber )
{

    return Math.round(ActualNumber + ( FinalNumber - ActualNumber ) * 0.01 );
}


function getRandomInt(max) 
{
  return Math.floor(Math.random() * max);
}





function playerLoadingJupiter()
{ 
jupiterloading.play();


}

function DoesJupiterCollideWithAnyoneInvertedOrder()
{
	if( -player_x + enemy_x >-100 && -player_x + enemy_x < 0  && power_jupiter>0 && post_jupiter==true) 
	{
	return true;	  			
	}
	else
	{
	return false;			
	}

return true; 
}

//Agresive functions attack functions
function PlayerUnleashAttack( TypeOfAttack )
{  

	if( TypeOfAttack == "Normal")
	{
	   if(run_animation_attack==0){audiosword2.play();}
       if( DoesPlayerIsInAttackProximity() )
	   {     
		   takeDamage("EnemyArcher", 2); 	
       }
	   
		actorsIngame.forEach(CheckAttackForActors);
		function CheckAttackForActors(value, index, array) 
		{
			
			if( value != null ) 
			{
				if( DoesCollideXYWithXY(player_x, player_y, value.x, value.y, 10, 10)    )  //Do that Y is also a variable of proximity when colliding
				{
					value.ActorTakeDamage(2); 
				}	
			}

		}		
	}
	if( TypeOfAttack == "Jupiter")
	{
	audiosword.play();
       if( DoesPlayerIsInAttackProximity() )
	   {     
		   takeDamage("EnemyArcher", power_jupiter *10); 	
       }
		actorsIngame.forEach(CheckAttackForActors);
		function CheckAttackForActors(value, index, array) 
		{
			
			if( value != null ) 
			{
				if( DoesCollideXYWithXY(player_x, player_y, value.x, value.y, 10, 10)    )  //Do that Y is also a variable of proximity when colliding
				{
					value.ActorTakeDamage(power_jupiter *10); 
				}	
			}

		}	
	}
	if( TypeOfAttack == "Normal")
	{
	   if(run_animation_attack==0){audiosword2.play();}
       if( DoesPlayerIsInAttackProximityInvertedOrder() )
	   {     
		   takeDamage("EnemyArcher", 2); 	
       }
	   
		actorsIngame.forEach(CheckAttackForActors);
		function CheckAttackForActors(value, index, array) 

		{
			
			if( value != null ) 
			{
				if( DoesCollideXYWithXY(player_x, player_y, value.x, value.y, 10, 10)    )  //Do that Y is also a variable of proximity when colliding
				{
					value.ActorTakeDamage(2); 
				}	
			}
		}		
	}
	if( TypeOfAttack == "Jupiter")
	{

	audiosword.play();
       if( DoesPlayerIsInAttackProximityInvertedOrder() )
	   {     
		   takeDamage("EnemyArcher", power_jupiter *10); 	
       }
		actorsIngame.forEach(CheckAttackForActors);
		function CheckAttackForActors(value, index, array) 
		{
			
			if( value != null ) 
			{
				if( DoesCollideXYWithXY(player_x, player_y, value.x, value.y, 10, 10)    )  //Do that Y is also a variable of proximity when colliding

				{
					value.ActorTakeDamage(power_jupiter *10); 
				}	
			}
		}	
	}
return true; 
}
//For specific next stage to go at 
function SetNextStage()
{
	clearInterval(NextStageIntervalHandle); 
	HandleNewStage(screen); 	

}
//For specific stage to go at 
function SetSpecificStage(NewStage)
{
    if( actorsIngame.indexOf(EnemyArcher1) > -1 || actorsIngame.indexOf(EnemyArcher2) > -1 || actorsIngame.indexOf(EnemyArcher3) > -1 ) 
    {

    }
    else
    {
	screen = NewStage; 
	HandleNewStage(NewStage); 
    }
}

function HandleNewStage(NewStage) 
{
 

	if( NewStage == -0.5 ) 
	{
    DestroySpecificActorOfTheWorld(VictoryRudis);
    if( actorsIngame.indexOf(EnemyArcher1) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher1);
    if( actorsIngame.indexOf(EnemyArcher1AI) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher1AI);	
	if( actorsIngame.indexOf(EnemyArcher2) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher2);
	if( actorsIngame.indexOf(EnemyArcher2AI) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher2AI); 
    if(actorsIngame.indexOf(EnemyArcher3) > -1)
    DestroySpecificActorOfTheWorld(EnemyArcher3);
    if(actorsIngame.indexOf(EnemyArcher3AI) > -1)
    DestroySpecificActorOfTheWorld(EnemyArcher3AI);

		Knifevar=spawnActor('Knife', 175, 0, 2, "Knife.png","Knife" );
  		Archer1actor_y = 0;
		EnemyArcher1 = spawnActor('EnemyArcherExtra1', 280, 0, 2, "enemyR.png", "Pawn");   //Enemy archer 1
		EnemyArcher1AI = spawnActor('EnemyArcherAIController1', 400, 0, 2, "jupiterpower0.png", "AIController", EnemyArcher1);   //AIController evil of archer
		EnemyArcher1AI.DesiredLocToGoX = EnemyArcher1.x; EnemyArcher1AI.DesiredLocToGoY = EnemyArcher1.y; 
		EnemyArcher1.PawnController = EnemyArcher1AI; 
	}

	if( NewStage == 0 ) 
	{
DestroySpecificActorOfTheWorld(Knifevar);
    DestroySpecificActorOfTheWorld(VictoryRudis);
    if( actorsIngame.indexOf(EnemyArcher1) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher1);
    if( actorsIngame.indexOf(EnemyArcher1AI) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher1AI);	
	if( actorsIngame.indexOf(EnemyArcher2) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher2);
	if( actorsIngame.indexOf(EnemyArcher2AI) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher2AI); 
    if(actorsIngame.indexOf(EnemyArcher3) > -1)
    DestroySpecificActorOfTheWorld(EnemyArcher3);
    if(actorsIngame.indexOf(EnemyArcher3AI) > -1)
    DestroySpecificActorOfTheWorld(EnemyArcher3AI);
		Archer1actor_y = 0;
 			Archer2actor_y = 0;
		EnemyArcher1 = spawnActor('EnemyArcherExtra1', 50, 0, 2, "enemyR.png", "Pawn");   //Enemy archer 1
		EnemyArcher1AI = spawnActor('EnemyArcherAIController1', 400, 0, 2, "jupiterpower0.png", "AIController", EnemyArcher1);   //AIController evil of archer
		EnemyArcher1AI.DesiredLocToGoX = EnemyArcher1.x; EnemyArcher1AI.DesiredLocToGoY = EnemyArcher1.y; 
		EnemyArcher1.PawnController = EnemyArcher1AI;  
    Archer1actor_x=EnemyArcher1.x; 
		EnemyArcher2 = spawnActor('EnemyArcherExtra2', 60, 0, 2, "enemyR.png", "Pawn");   //Enemy archer 2 
		EnemyArcher2AI = spawnActor('EnemyArcherAIController2', 400, 0, 2, "jupiterpower0.png", "AIController", EnemyArcher2);   //AIController evil of archer		
		EnemyArcher2AI.DesiredLocToGoX = EnemyArcher2.x; EnemyArcher2AI.DesiredLocToGoY = EnemyArcher2.y; 		
		EnemyArcher2.PawnController = EnemyArcher2AI;  		
		    Archer2actor_x=EnemyArcher2.x; 
	}
	if( NewStage == 1 ) 
	{

    DestroySpecificActorOfTheWorld(VictoryRudis);
    if( actorsIngame.indexOf(EnemyArcher1) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher1);
    if( actorsIngame.indexOf(EnemyArcher1AI) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher1AI);	
	if( actorsIngame.indexOf(EnemyArcher2) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher2);
	if( actorsIngame.indexOf(EnemyArcher2AI) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher2AI); 
    if(actorsIngame.indexOf(EnemyArcher3) > -1)
    DestroySpecificActorOfTheWorld(EnemyArcher3);
    if(actorsIngame.indexOf(EnemyArcher3AI) > -1)
    DestroySpecificActorOfTheWorld(EnemyArcher3AI);

		Archer1actor_y = 0;
 			Archer2actor_y = 0;
			Archer3actor_y = 0;
		EnemyArcher1 = spawnActor('EnemyArcherExtra1', 50, 0, 2, "enemyR.png", "Pawn");   //Enemy archer 1
		EnemyArcher1AI = spawnActor('EnemyArcherAIController1', 400, 0, 2, "jupiterpower0.png", "AIController", EnemyArcher1);   //AIController evil of archer
		EnemyArcher1AI.DesiredLocToGoX = EnemyArcher1.x; EnemyArcher1AI.DesiredLocToGoY = EnemyArcher1.y; 
		EnemyArcher1.PawnController = EnemyArcher1AI;  
    Archer1actor_x=EnemyArcher1.x; 
		EnemyArcher2 = spawnActor('EnemyArcherExtra2', 60, 0, 2, "enemyR.png", "Pawn");   //Enemy archer 2 
		EnemyArcher2AI = spawnActor('EnemyArcherAIController2', 400, 0, 2, "jupiterpower0.png", "AIController", EnemyArcher2);   //AIController evil of archer		
		EnemyArcher2AI.DesiredLocToGoX = EnemyArcher2.x; EnemyArcher2AI.DesiredLocToGoY = EnemyArcher2.y; 		
		EnemyArcher2.PawnController = EnemyArcher2AI;  		
		    Archer2actor_x=EnemyArcher2.x; 
		EnemyArcher3 = spawnActor('EnemyArcherExtra3', 70, 0, 2, "enemyR.png", "Pawn");   //Enemy archer 3 	
		EnemyArcher3AI = spawnActor('EnemyArcherAIController3', 400, 0, 2, "jupiterpower0.png", "AIController", EnemyArcher3);   //AIController evil of archer	
		EnemyArcher3AI.DesiredLocToGoX = EnemyArcher3.x; EnemyArcher3AI.DesiredLocToGoY = EnemyArcher3.y; 		
		EnemyArcher3.PawnController = EnemyArcher3AI; 
		    Archer3actor_x=EnemyArcher3.x; 

	}
	if( NewStage == 2 ) 
	{    
    DestroySpecificActorOfTheWorld(VictoryRudis);
    if( actorsIngame.indexOf(EnemyArcher1) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher1);
    if( actorsIngame.indexOf(EnemyArcher1AI) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher1AI);	
	if( actorsIngame.indexOf(EnemyArcher2) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher2);
	if( actorsIngame.indexOf(EnemyArcher2AI) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher2AI); 
    if(actorsIngame.indexOf(EnemyArcher3) > -1)
    DestroySpecificActorOfTheWorld(EnemyArcher3);
    if(actorsIngame.indexOf(EnemyArcher3AI) > -1)
    DestroySpecificActorOfTheWorld(EnemyArcher3AI);


			Archer1actor_y = 0;
 			Archer2actor_y = 0;
			Archer3actor_y = 0;
		EnemyArcher1 = spawnActor('EnemyArcherExtra1', 50, 0, 2, "enemyR.png", "Pawn");   //Enemy archer 1
		EnemyArcher1AI = spawnActor('EnemyArcherAIController1', 400, 0, 2, "jupiterpower0.png", "AIController", EnemyArcher1);   //AIController evil of archer
		EnemyArcher1AI.DesiredLocToGoX = EnemyArcher1.x; EnemyArcher1AI.DesiredLocToGoY = EnemyArcher1.y; 
		EnemyArcher1.PawnController = EnemyArcher1AI;  
    Archer1actor_x=EnemyArcher1.x; 
		EnemyArcher2 = spawnActor('EnemyArcherExtra2', 60, 0, 2, "enemyR.png", "Pawn");   //Enemy archer 2 
		EnemyArcher2AI = spawnActor('EnemyArcherAIController2', 400, 0, 2, "jupiterpower0.png", "AIController", EnemyArcher2);   //AIController evil of archer		
		EnemyArcher2AI.DesiredLocToGoX = EnemyArcher2.x; EnemyArcher2AI.DesiredLocToGoY = EnemyArcher2.y; 		
		EnemyArcher2.PawnController = EnemyArcher2AI;  		
		    Archer2actor_x=EnemyArcher2.x; 
		EnemyArcher3 = spawnActor('EnemyArcherExtra3', 70, 0, 2, "enemyR.png", "Pawn");   //Enemy archer 3 	
		EnemyArcher3AI = spawnActor('EnemyArcherAIController3', 400, 0, 2, "jupiterpower0.png", "AIController", EnemyArcher3);   //AIController evil of archer	
		EnemyArcher3AI.DesiredLocToGoX = EnemyArcher3.x; EnemyArcher3AI.DesiredLocToGoY = EnemyArcher3.y; 		
		EnemyArcher3.PawnController = EnemyArcher3AI; 
		    Archer3actor_x=EnemyArcher3.x; 

	}
	if( NewStage == 3 ) 
	{

    if( actorsIngame.indexOf(EnemyArcher1) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher1);
    if( actorsIngame.indexOf(EnemyArcher1AI) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher1AI);	
	if( actorsIngame.indexOf(EnemyArcher2) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher2);
	if( actorsIngame.indexOf(EnemyArcher2AI) > -1 )
    DestroySpecificActorOfTheWorld(EnemyArcher2AI); 
    if(actorsIngame.indexOf(EnemyArcher3) > -1)
    DestroySpecificActorOfTheWorld(EnemyArcher3);
    if(actorsIngame.indexOf(EnemyArcher3AI) > -1)
    DestroySpecificActorOfTheWorld(EnemyArcher3AI);


    

		VictoryRudis = spawnActor('Rudis Level 1',  175, 0,  1, "rudis40.png", "Rudis");   


   }
	
}



function bIsOnFloorAlready(ActorChecking)
{

	if( ActorChecking.y >= 360 )  //190
	{
		return true; 	
	}
	else 
	{
		return false; 	
	}


}

function KnifeIsOnFloorAlready(ActorChecking)
{



	if( ActorChecking.y >= 277 )  
	{
		return true; 	
	}
	else 
	{
		return false; 	
	}


}



function FirstBossDeadEvent()
{
	clearInterval(ArrowSpawnerTimerHandle);
}

function returnscreensideweare(Kind, ActorAtExtreme)
{

	if( Kind == "Player" ) 
	{
		if( player_x < 120  ) 
		{
			return true; 	//Is  on left		
		}
		else
		{
			return false; //Is  on right		
		}
		

	}
	if( Kind == "Actor" ) 
	{

		return true; 
	}
}

function IsOnExtremOfPantalla(Kind, ActorAtExtreme, bGoingRight)
{


	if( Kind == "Player" ) 
	{
		if( player_x < -60 && bGoingRight ) 
		{
			return true; 			
		}
		else 
		{
			if( player_x > 290 && !bGoingRight &&  screen > 2)  //!ScreenCompletedEmpty[screen]
			{

			
			
				return true; 			
			}
		
		
			return false; 
		}
		

	}
	if( Kind == "Actor" ) 
	{

		return true; 
	}

	return false; 
}

function IsScreenEmptyOfEnemiesComplete()
{

	return true; 
}

function IsPointOutsideWorld(OutX, OutY)
{
	if( OutX > 340 || OutX < -50  ) 
	{ 
        return true;
	} 
	else
	{
        return false;	
	}
} 

var canvasrestart = document.getElementById('buttonrestart');
if (canvasrestart.getContext) 
    {
    var ctxrestart = canvasrestart.getContext('2d');
    canvas
    ctxrestart.beginPath();
    ctxrestart.fillStyle = 'black';
    ctxrestart.font = "22px arial";
    ctxrestart.fillText("Reset Game" , 108, 23);

    }
var canvasleft = document.getElementById('buttonleft');
if (canvasleft.getContext) 
    {
    var ctxleft = canvasleft.getContext('2d');
    ctxleft.beginPath();
    var imgleft = new Image();   // Create new img element
imgleft.addEventListener("load", function() {
    ctxleft.drawImage(imgleft,0,0,128,128,0,0,88,88);
}, false);
imgleft.src = 'heroRun0L.png'; // Set source path
    }
var canvasright = document.getElementById('buttonright');
if (canvasright.getContext) 
    {
    var ctxright = canvasright.getContext('2d');
    ctxright.beginPath();
    var imgright = new Image();   // Create new img element
imgright.addEventListener("load", function() {
    ctxright.drawImage(imgright,0,0,128,128,0,0,88,88);
}, false);
imgright.src = 'heroRun0R.png'; 
    }
var canvasup = document.getElementById('buttonup');
if (canvasup.getContext) 
    {
    var ctxup = canvasup.getContext('2d');
    ctxup.beginPath();
    var imgup = new Image();   // Create new img element
imgup.addEventListener("load", function() {
    ctxup.drawImage(imgup,0,0,128,128,0,-40,88,88);
}, false);
imgup.src = 'heroIldeR.png'; 

    }
var canvasdown = document.getElementById('buttondown');
if (canvasdown.getContext) 
    {
    var ctxdown = canvasdown.getContext('2d');
    ctxdown.beginPath();
var imgdown = new Image();   // Create new img element
imgdown.addEventListener("load", function() {
    ctxdown.drawImage(imgdown,0,0,128,128,0,0,88,88);
}, false);
imgdown.src = 'heroCrouchIdleR.png'; 
    }

var canvasenter = document.getElementById('buttonenter');
if (canvasenter.getContext) 
    {
    var ctxenter = canvasenter.getContext('2d');
    ctxenter.beginPath();
    ctxenter.fillStyle = 'white';
    ctxenter.font = "25px arial";
    ctxenter.fillText("Enter" , 4, 47);
    }
var canvasz = document.getElementById('buttonz');
if (canvasz.getContext) 
    {
    var ctxz = canvasz.getContext('2d');
    ctxz.beginPath();
var imgz = new Image();   // Create new img element
imgz.addEventListener("load", function() {
    ctxz.drawImage(imgz,0,0,128,128,0,0,88,88);
}, false);
imgz.src = 'heroUnleashAttackR.png'; 
    }
var canvasx = document.getElementById('buttonx');
if (canvasx.getContext) 
    {
    var ctxx = canvasx.getContext('2d');
    ctxx.beginPath();
var imgx = new Image();   // Create new img element
var imgx2 = new Image();   // Create new img element
imgx.addEventListener("load", function() {
    ctxx.drawImage(imgx,0,0,128,128,0,0,88,88);
}, false);
imgx2.addEventListener("load", function() {
    ctxx.drawImage(imgx2,0,0,128,128,0,0,88,88);
}, false);
imgx.src = 'jupiterR.png';
imgx2.src = 'jupiterpower0.png';
    }
var canvasc = document.getElementById('buttonc');
if (canvasc.getContext) 
    {
    var ctxc = canvasc.getContext('2d');
    ctxc.beginPath();
var imgc = new Image();   // Create new img element
imgc.addEventListener("load", function() {
    ctxc.drawImage(imgc,0,0,128,128,0,0,88,88);
}, false);
imgc.src = 'heroPrepareAttackR.png'; 
    }

