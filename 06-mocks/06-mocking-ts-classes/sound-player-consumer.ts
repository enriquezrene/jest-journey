import {SoundPlayer} from "./sound-player";

export class SoundPlayerConsumer {

    private soundPlayer: SoundPlayer

    constructor() {
        this.soundPlayer = new SoundPlayer()
    }

    consumePlayer(songName: string){
        this.soundPlayer.play(songName)
    }
}

export default {
    SoundPlayerConsumer
}