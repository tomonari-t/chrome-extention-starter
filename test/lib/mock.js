chrome = {
    storage: {
        sync: {
            set: () => {},
            get: () => {}
        }
    },
    runtime: {
        onInstalled: {
            addListener: () => {}
        }
    },
    declarativeContent: {
        onPageChanged: {
            removeRules: () => {},
            addRules: () => {}
        }
    }
};

document = {
    getElementById: () => {
        return {
            onclick: {}
        };
    }
};
