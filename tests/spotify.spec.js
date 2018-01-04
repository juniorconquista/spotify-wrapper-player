import { expect } from 'chai';
import spotify from '../src/spotify';

describe('spotify', () => {

    it('should be an object', () => {
        expect(spotify).to.be.an.object;
    }); 

    it('should have search methods', () => {
        expect(spotify.search).to.exist;
    }); 

    it('should have album methods', () => {
        expect(spotify.album).to.exist;
    }); 
    
});