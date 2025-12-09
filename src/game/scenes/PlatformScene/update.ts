import Dude from "../../components/house/Dude";
import { CAMERA_MOVE_SPEED } from "../../consts";
import { PlatformScene } from "../PlatformScene";

export function update(scene: PlatformScene) {
    //if (!scene.mainDude || !scene.mainDude.isAlive) {
    if (!scene.mainDude) {
        // have no response from initial request yet
        return;
    }

    // QUEUE
    if (scene.isWalking) {
        scene.queue.startObject.setVelocityX(scene.dudeWalkSpeed);
    } else {
        scene.queue.startObject.setVelocityX(0);
    }

    // MAIN PLAYER
    const { gameObject } = scene.mainDude;

    if (scene.isWalking) {
        if (!gameObject.body.touching.right && gameObject.x > scene.camera.width / 2 - 50) {
            scene.camera.scrollX += CAMERA_MOVE_SPEED;
        }
        if (!scene.mainDude.isMovingRight) {
            scene.mainDude.setIsMoving("right", true);
            scene.mainDude.playWalkAnimation();
        }
        gameObject.setVelocityX(scene.dudeWalkSpeed);
    }

    if (!scene.isWalking) {
        if (scene.mainDude.isMovingRight) {
            scene.mainDude.setIsMoving("right", false);
            scene.mainDude.playIdleAnimation();
        }
        gameObject.setVelocityX(0);
    }

    // animations

    if (!scene.mainDude.isAlive) {
        if (scene.mainDude.isGoingUp) {
            gameObject.setVelocityY(-50);
        }
        if (!scene.mainDude.isGoingUp) {
            gameObject.setVelocityY(0);
        }
    }

    if (scene.mainDude.isChangingPosition) {
        const newX = scene.queue.getX(scene.mainDude.newQueuePosition);
        if (Math.abs(scene.mainDude.gameObject.x - newX) < 10) {
            scene.mainDude.isChangingPosition = false;
            scene.mainDude.gameObject.x = scene.queue.getX(scene.mainDude.newQueuePosition);
            return;
        }

        if (newX > scene.mainDude.gameObject.x) {
            scene.mainDude.gameObject.setVelocityX(scene.dudeWalkSpeed + 200);
        } else {
            scene.mainDude.gameObject.setVelocityX(0);
        }
    }

    // animation (stair up, stair down, falling down)
    // if (scene.mainDude.isAnimation) {
    //     gameObject.setVelocityX(0);
    //     if (scene.mainDude.isMovingLeft || scene.mainDude.isMovingRight) {
    //         scene.mainDude.isMovingLeft = false;
    //         scene.mainDude.isMovingRight = false;
    //     }

    //     scene.animate(scene.mainDude, true);
    // }

    // move dude stats/animations with its gameObject
    scene.mainDude.container.setPosition(gameObject.x, gameObject.y);

    // OTHER PLAYERS
    // other players moves and animations
    scene.dudesContainer.dudes.forEach((dude: Dude) => {
        //const { gameObject } = dude;

        // if (dude.isAnimation) {
        //     gameObject.setVelocityX(0);
        //     scene.animate(dude, false);
        //     return;
        // }

        if (scene.isWalking) {
            dude.facing = "right";
            if (!dude.isMovingRight) {
                dude.setIsMoving("right", true);
                dude.playWalkAnimation();
            }
            dude.gameObject.setVelocityX(scene.dudeWalkSpeed);
        }

        if (!scene.isWalking) {
            if (dude.isMovingRight) {
                dude.setIsMoving("right", false);
                dude.playIdleAnimation();
            }
            dude.gameObject.setVelocityX(0);
        }

        // animations

        if (!dude.isAlive) {
            if (dude.isGoingUp) {
                dude.gameObject.setVelocityY(-50);
            }
            if (!dude.isGoingUp) {
                dude.gameObject.setVelocityY(0);
            }
        }

        if (dude.isChangingPosition) {
            const newX = scene.queue.getX(dude.newQueuePosition);
            //console.log(" +++++ DUDE CHANGING POSITION", newX, dude.gameObject.x);
            if (Math.abs(dude.gameObject.x - newX) < 20) {
                dude.isChangingPosition = false;
                dude.gameObject.x = newX;
                return;
            }

            if (newX > dude.gameObject.x) {
                dude.gameObject.setVelocityX(scene.dudeWalkSpeed + 200);
            } else {
                dude.gameObject.setVelocityX(0);
            }
        }

        dude.container.setPosition(dude.gameObject.x, dude.gameObject.y);
    });

    // check main player and house objects collision
    scene.houseColliders.forEach((collider) => {
        collider.checkPlayerCollide(scene.mainDude);
    });

    // check main player and items on the floor collision
    scene.houseItemsColliders.forEach((collider) => {
        collider.checkPlayerCollide(scene.mainDude);
    });

    // ROOM OBJECTS
    if (scene.roomObjectsController) {
        scene.roomObjectsController.update();
    }

    // BOTS
    if (scene.botController.getIsEnabled() && scene.botController.getIsUpdateEnabled()) {
        scene.botController.update();
    }

    // LEVELS
    if (scene.levelController.getIsEnabled()) {
        scene.levelController.update();
    }

    if (scene.itemsPanel.isOpeningAnimation) {
        scene.itemsPanel.setY(scene.itemsPanel.y - 2);
    }
    if (scene.bonusSelectPanel.isOpeningAnimation) {
        scene.bonusSelectPanel.setY(scene.bonusSelectPanel.y - 2);
    }

    // FIRST PLAN OBJECTS
    scene.firstPlan.update();

    // EVENTS
    if (scene.isHost) {
        scene.houseEventController.update();
    }

    // DUDE ANIMATION
    scene.dudeAnimationController.update();
}
