import { describe } from 'riteway';

describe('teest', async assert => {
    assert({
        given: 'a test',
        should: 'pass',
        actual: 1,
        expected: 1
    });
}
);