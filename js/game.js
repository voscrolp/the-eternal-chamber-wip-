class Game{
    constructor(){

    }

    getState(){
        database.ref('gameState').on("value",(data)=>{
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        
        if(gameState === 0){
            player = new Player();

            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.readCount();
            }

        form = new Form();
        form.display();

        }

        player1 = createSprite(displayWidth/10,displayHeight/2);
        player1.addAnimation("gameFiles/playerIdle/frame_0_delay-0.5s.png","gameFiles/playerIdle/frame_1_delay-0.5s.png","gameFiles/playerIdle/frame_2_delay-0.5s.png");
        player1.scale = 0.1;
        //player1.visible = false;
         
        player2 = createSprite(displayWidth/10*2,displayHeight/2);
        player2.addAnimation("gameFiles/playerIdle/frame_0_delay-0.5s.png","gameFiles/playerIdle/frame_1_delay-0.5s.png","gameFiles/playerIdle/frame_2_delay-0.5s.png");
        player2.scale = 0.1;
        //player2.visible = false;

        player3 = createSprite(displayWidth/10*3,displayHeight/2);
        player3.addAnimation("gameFiles/playerIdle/frame_0_delay-0.5s.png","gameFiles/playerIdle/frame_1_delay-0.5s.png","gameFiles/playerIdle/frame_2_delay-0.5s.png");
        player3.scale = 0.1;
         //player3.visible = false;

        player4 = createSprite(displayWidth/10*4,displayHeight/2);
        player4.addAnimation("gameFiles/playerIdle/frame_0_delay-0.5s.png","gameFiles/playerIdle/frame_1_delay-0.5s.png","gameFiles/playerIdle/frame_2_delay-0.5s.png");
        player4.scale = 0.1;
        //player4.visible = false;

        players = [player1,player2,player3,player4];

       
    }

    play(){
        form.hide();
        drawSprites();
        Player.getPlayerInfo();
        //player.readPosition();

       // player1.visible = true;
       // player2.visible = true;
       // player3.visible = true;
       // player4.visible = true;
        

        if(allPlayers !== undefined){
            var index = 0;

           // var x = this.x;
           // var y = this.y;

            for(var plr in allPlayers){
                index = index + 1;
                
              //  y = y + 200;
                //players[index-1].velocityY = players[index-1].velocityY + 3;
                if(player.index == player.index){
                   // players[index-1].y = player.y;
                   // players[index-1].x = player.x;
                }
                
                // if(index == player.index){
                    //var playerName = createElement('h2');
                    //playerName.html(player.name);
                   // playerName.position(players[index-1].x - 25, players[index-1].y - 150);
                   // playerName.style('color','#FFFFFF');
                    //nameDisplayed = true;
          //  }

            }

            
        }

        if(keyDown('D') || keyDown('d') && index == player.index){
            //players[index-1].y = player.y;
           // players[index-1].x = player.x;
            player.writePosition(3,0);
        }

        player1.collide(invisibleGround);
        player2.collide(invisibleGround);
        player3.collide(invisibleGround);
        player4.collide(invisibleGround);

        

        

        /*
        if(keyDown(LEFT_ARROW) && player.index != null){
            player.writePosition(-3,0);
        }
        else if(keyDown(RIGHT_ARROW) && player.index != null){
            player.writePosition(3,0);
        }
        else if(keyDown(UP_ARROW) && player.index != null){
            player.writePosition(0,-3);
        }
        else if(keyDown(DOWN_ARROW) && player.index != null){
            player.writePosition(0,+3);
        }

        

        

        */
    }
    }