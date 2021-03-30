import { SoundPlayer } from './sound-player';
import { SoundPlayerConsumer } from './sound-player-consumer';

jest.mock('./sound-player'); // SoundPlayer is now a mock constructor

const SoundPlayerMock = SoundPlayer as jest.MockedClass<typeof SoundPlayer>;

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    SoundPlayerMock.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
    new SoundPlayerConsumer();
    expect(SoundPlayerMock).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
    // Show that mockClear() is working:
    expect(SoundPlayerMock).not.toHaveBeenCalled();

    const soundPlayerConsumer = new SoundPlayerConsumer();
    // Constructor should have been called again:
    expect(SoundPlayerMock).toHaveBeenCalledTimes(1);
    //
    const coolSoundFileName = 'song.mp3';
    soundPlayerConsumer.consumePlayer(coolSoundFileName)

    // function from mocked file has been called
    expect(SoundPlayerMock.prototype.play).toHaveBeenCalledWith(coolSoundFileName);
    expect(SoundPlayerMock.prototype.play).toHaveBeenCalled();
});