const DEFAULT_RAW_PYTHON = `from pyxel import Pyxel
pyxel = Pyxel()
`;

const USER_SNIPPETS_STORAGE_KEY = 'pyxel-user-snippets';
const DIRECT_REMOTE_SLOTS_STORAGE_KEY = 'pyxel-direct-remote-slots';
const TRANSPORT_MODE_STORAGE_KEY = 'pyxel-transport-mode';
const DIRECT_BASE_URL_STORAGE_KEY = 'pyxel-direct-base-url';
const LABEL_MODE_STORAGE_KEY = 'pyxel-label-mode';
const DOG_WIFI_SSID_STORAGE_KEY = 'pyxel-dog-wifi-ssid';
const DOG_WIFI_PASSWORD_STORAGE_KEY = 'pyxel-dog-wifi-password';
const DEFAULT_DIRECT_BASE_URL = 'http://192.168.4.1';
const DEFAULT_DOG_WIFI_SSID = 'Pyxel Pet';
const DEFAULT_DOG_WIFI_PASSWORD = '12345678';
const DEFAULT_DIRECT_HEALTH_TIMEOUT_MS = 1500;

export const COMMAND_CATALOG = [
  { id: 'forward', label: 'Forward', category: 'movement', transport: 'websocket', payload: 'SForward,999,0,0', confirmed: true },
  { id: 'backward', label: 'Backward', category: 'movement', transport: 'websocket', payload: 'SBackward,999,0,0', confirmed: true },
  { id: 'left', label: 'Left', category: 'movement', transport: 'websocket', payload: 'STurnLeft,360,0,0', confirmed: true },
  { id: 'right', label: 'Right', category: 'movement', transport: 'websocket', payload: 'STurnRight,360,0,0', confirmed: true },
  { id: 'stop', label: 'Stop', category: 'movement', transport: 'websocket', payload: 'SForward,0,0,0', confirmed: true },
  { id: 'sit', label: 'Sit', category: 'expression', transport: 'python', pythonBody: 'pyxel.Sit()', confirmed: true },
  { id: 'wag', label: 'Wag', category: 'expression', transport: 'python', pythonBody: 'pyxel.Wag(1, 1, 5)', confirmed: true },
  { id: 'chase-tail', label: 'Chase Tail', category: 'expression', transport: 'python', pythonBody: 'pyxel.ChaseTail(0)', confirmed: true },
  { id: 'lights', label: 'Lights', category: 'effects', transport: 'python', pythonBody: 'pyxel.Lights(1,3)', confirmed: true },
  { id: 'sound', label: 'Sound', category: 'effects', transport: 'python', pythonBody: 'pyxel.PlaySound(1,0,1)', confirmed: true },
  { id: 'expression', label: 'Expression', category: 'effects', transport: 'python', pythonBody: 'pyxel.Eyes(1,2)\r\npyxel.Mouth(1)', confirmed: true },
  { id: 'dance', label: 'Dance', category: 'expression', transport: 'python', pythonBody: 'pyxel.Dance()', confirmed: true },
  { id: 'listen', label: 'Listen', category: 'sensors', transport: 'python', pythonBody: 'if pyxel.Listen(1):\r\n    pyxel.PlaySound(1,0,1)', confirmed: true },
  { id: 'touch', label: 'Touch', category: 'sensors', transport: 'python', pythonBody: 'if pyxel.Touch(1):\r\n    pyxel.Wag(1, 1, 2)', confirmed: true },
  { id: 'proximity', label: 'Proximity', category: 'sensors', transport: 'python', pythonBody: 'pyxel.SetProximity(1)\r\nif pyxel.Proximity(1):\r\n    pyxel.Wag(1, 1, 2)', confirmed: true },
  { id: 'lightshow', label: 'Lightshow', category: 'experimental', transport: 'python', pythonBody: 'pyxel.Lightshow()', confirmed: false },
  { id: 'shake', label: 'Shake', category: 'experimental', transport: 'python', pythonBody: 'pyxel.Shake()', confirmed: false },
  { id: 'stand-up', label: 'Stand Up', category: 'experimental', transport: 'python', pythonBody: 'pyxel.StandUp()', confirmed: false },
  { id: 'wiggle-butt', label: 'Wiggle Butt', category: 'experimental', transport: 'python', pythonBody: 'pyxel.WiggleButt()', confirmed: false },
  { id: 'scoot', label: 'Scoot', category: 'experimental', transport: 'python', pythonBody: 'pyxel.Scoot(6,0)', confirmed: false },
  { id: 'pee', label: 'Pee', category: 'experimental', transport: 'python', pythonBody: 'pyxel.Pee()', confirmed: false },
  { id: 'treat', label: 'Treat', category: 'experimental', transport: 'python', pythonBody: 'pyxel.Treat()', confirmed: false },
  { id: 'wait-one', label: 'Wait', category: 'experimental', transport: 'python', pythonBody: 'pyxel.Wait(1)', confirmed: false },
  { id: 'blocking-on', label: 'Blocking On', category: 'experimental', transport: 'python', pythonBody: 'pyxel.SetBlocking(1)', confirmed: false },
  { id: 'blocking-off', label: 'Blocking Off', category: 'experimental', transport: 'python', pythonBody: 'pyxel.SetBlocking(0)', confirmed: false },
  { id: 'turn-45', label: 'Turn 45', category: 'experimental', transport: 'python', pythonBody: 'pyxel.Turn(1,45)', confirmed: false },
];

const PRESET_LABELS = {
  light: {
    1: 'Warm White',
    2: 'Spooky Red',
    3: 'Mint Glow',
    4: 'Ocean Blue',
    5: 'Sunny Gold',
    6: 'Purple Pop',
    7: 'Candy Pink',
    8: 'Rainbow Party',
  },
  sound: {
    1: 'Happy Bark',
    2: 'Dance Chirp',
    3: 'Giggle Beep',
    4: 'Guard Bark',
    5: 'Oops Boop',
    6: 'Silly Squeak',
    7: 'Party Beat',
    8: 'Disco Jam',
    9: 'Ready Chirp',
    10: 'Victory Tone',
  },
  expression: {
    1: 'Best Friend',
    2: 'Sleepy Pup',
    3: 'Cheeky Grin',
    4: 'Hero Face',
    5: 'Curious Pup',
    6: 'Goofy Smile',
    7: 'Disco Pup',
    8: 'Brave Mode',
    9: 'Spooky Stare',
    10: 'Big Laugh',
  },
  eyes: {
    1: 'Bright Eyes',
    2: 'Sleepy Eyes',
    3: 'Wink Eyes',
    4: 'Sparkle Eyes',
    5: 'Curious Eyes',
    6: 'Cool Eyes',
    7: 'Dance Eyes',
    8: 'Hero Eyes',
    9: 'Spooky Eyes',
    10: 'Surprise Eyes',
  },
  mouth: {
    1: 'Tiny Smile',
    2: 'Soft Smile',
    3: 'Happy Smile',
    4: 'Open Smile',
    5: 'Ooh Face',
    6: 'Party Grin',
    7: 'Tongue Out',
    8: 'Alert Mouth',
    9: 'Wow Mouth',
    10: 'Big Laugh',
  },
};

const COMMAND_ICONS = {
  forward: '↑',
  backward: '↓',
  left: '←',
  right: '→',
  stop: '■',
  sit: '🪑',
  wag: '↔',
  'chase-tail': '↻',
  lights: '💡',
  sound: '🔊',
  expression: '🙂',
  dance: '♪',
  listen: '👂',
  touch: '✋',
  proximity: '👀',
  lightshow: '🌈',
  shake: '🐾',
  'stand-up': '⬆',
  'wiggle-butt': '↔',
  scoot: '⇢',
  pee: '🚩',
  treat: '🍖',
  'wait-one': '⏱',
  'blocking-on': '⛓',
  'blocking-off': '⊘',
  'turn-45': '↷',
};

const TOYBOX_ICONS = {
  'party-mode': '🪩',
  sleepy: '🌙',
  'nap-mode': '💤',
  'wake-up': '☀',
  'clap-dance': '👏',
  'clap-come-here': '👋',
  'spooky-face': '👻',
  'touch-wag': '✋',
  'guard-dog': '👀',
  'obstacle-escape': '🚧',
  'random-mood': '🎲',
  'disco-mode': '♪',
  'surprise-me': '🎁',
  'rainbow-burst': '🌈',
  'giggle-beeps': '🔊',
};

const PUPPY_TRICK_EXPERIMENTAL_LABELS = {
  shake: 'Paw',
  pee: 'Pee',
  'wiggle-butt': 'Wiggle Butt',
  treat: 'Treat',
  'wait-one': 'Wait',
};

export const BUILT_IN_SNIPPETS = [
  {
    id: 'party-mode',
    title: 'Party Mode',
    code: `${DEFAULT_RAW_PYTHON}pyxel.Lights(8,3)
pyxel.PlaySound(7,0,1)
pyxel.Dance()`,
  },
  {
    id: 'sleepy',
    title: 'Sleepy',
    code: `${DEFAULT_RAW_PYTHON}pyxel.Sit()
pyxel.Lights(1,3)
pyxel.Eyes(2,2)
pyxel.Mouth(2)
pyxel.PlaySound(6,0,1)`,
  },
  {
    id: 'nap-mode',
    title: 'Nap Mode',
    code: `${DEFAULT_RAW_PYTHON}pyxel.Sit()
pyxel.Lights(1,3)
pyxel.Eyes(2,2)
pyxel.Mouth(2)
pyxel.SetProximity(1)
for _ in range(8):
    pyxel.PlaySound(6,0,1)
    if pyxel.Touch(1):
        pyxel.PlaySound(10,0,1)
        pyxel.Wag(1, 1, 2)
        break
    if pyxel.Proximity(1):
        pyxel.PlaySound(10,0,1)
        pyxel.Wag(1, 1, 2)
        break`,
  },
  {
    id: 'wake-up',
    title: 'Wake Up',
    code: `${DEFAULT_RAW_PYTHON}pyxel.PlaySound(10,0,1)
pyxel.Eyes(1,2)
pyxel.Mouth(3)
pyxel.Wag(1, 1, 3)`,
  },
  {
    id: 'spooky-face',
    title: 'Spooky Face',
    code: `${DEFAULT_RAW_PYTHON}pyxel.Lights(2,3)
pyxel.Eyes(9,2)
pyxel.Mouth(10)
pyxel.PlaySound(4,0,1)`,
  },
  {
    id: 'touch-wag',
    title: 'Touch Wag',
    code: `${DEFAULT_RAW_PYTHON}if pyxel.Touch(1):
    pyxel.Wag(1, 1, 3)`,
  },
  {
    id: 'rainbow-burst',
    title: 'Rainbow Burst',
    code: `${DEFAULT_RAW_PYTHON}pyxel.Lights(1,3)
pyxel.Lights(4,3)
pyxel.Lights(8,3)`,
  },
  {
    id: 'giggle-beeps',
    title: 'Giggle Beeps',
    code: `${DEFAULT_RAW_PYTHON}pyxel.PlaySound(1,0,1)
pyxel.PlaySound(3,0,1)
pyxel.PlaySound(6,0,1)`,
  },
  {
    id: 'clap-dance',
    title: 'Clap Dance',
    code: `${DEFAULT_RAW_PYTHON}pyxel.PlaySound(9,0,1)
for _ in range(20):
    if pyxel.Listen(1):
        pyxel.PlaySound(2,0,1)
        pyxel.Dance()
        break`,
  },
  {
    id: 'clap-come-here',
    title: 'Clap Come Here',
    code: `${DEFAULT_RAW_PYTHON}pyxel.PlaySound(9,0,1)
for _ in range(20):
    if pyxel.Listen(1):
        pyxel.Wag(1, 1, 2)
        pyxel.PlaySound(1,0,1)
        pyxel.SetProximity(1)
        for _ in range(12):
            if pyxel.Proximity(1):
                pyxel.PlaySound(10,0,1)
                pyxel.Wag(1, 1, 1)
                break
            pyxel.Forward(6, 1, 1)
        break`,
  },
  {
    id: 'guard-dog',
    title: 'Guard Dog',
    code: `${DEFAULT_RAW_PYTHON}pyxel.SetProximity(1)
if pyxel.Proximity(1):
    pyxel.PlaySound(4,0,1)
    pyxel.Eyes(9,2)
    pyxel.Mouth(8)`,
  },
  {
    id: 'obstacle-escape',
    title: 'Obstacle Escape',
    code: `${DEFAULT_RAW_PYTHON}pyxel.SetProximity(1)
if pyxel.Proximity(1):
    pyxel.PlaySound(5,0,1)
    pyxel.Backward(4, 1, 1)
    pyxel.TurnLeft(90, 1, 1)`,
  },
  {
    id: 'random-mood',
    title: 'Random Mood',
    code: `${DEFAULT_RAW_PYTHON}from random import randint
pyxel.Lights(randint(1,8),3)
pyxel.PlaySound(randint(1,10),0,1)
pyxel.Eyes(randint(1,10),2)
pyxel.Mouth(randint(1,10))`,
  },
  {
    id: 'disco-mode',
    title: 'Disco Mode',
    code: `${DEFAULT_RAW_PYTHON}pyxel.Lights(8,3)
pyxel.PlaySound(8,0,1)
pyxel.Eyes(7,2)
pyxel.Mouth(6)
pyxel.Dance()`,
  },
  {
    id: 'surprise-me',
    title: 'Surprise Me',
    code: `${DEFAULT_RAW_PYTHON}from random import randint
pyxel.PlaySound(randint(1,10),0,1)
pyxel.Lights(randint(1,8),3)
pyxel.Wag(1, 1, randint(1,5))`,
  },
];

function escapeHtml(value) {
  return `${value ?? ''}`
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function createRangeOptions(labels, selectedValue) {
  return Object.entries(labels).map(([key, label]) => {
    const value = Number(key);
    const selected = value === selectedValue ? ' selected' : '';
    return `<option value="${value}"${selected}>${value} - ${escapeHtml(label)}</option>`;
  }).join('');
}

function describePreset(type, value) {
  return `${value} - ${PRESET_LABELS[type]?.[value] ?? 'Unknown'}`;
}

function renderPresetSummary(values) {
  return `Light: ${escapeHtml(describePreset('light', values.light))} | Sound: ${escapeHtml(describePreset('sound', values.sound))} | Expression: ${escapeHtml(describePreset('expression', values.expression))} | Eyes: ${escapeHtml(describePreset('eyes', values.eyes))} | Mouth: ${escapeHtml(describePreset('mouth', values.mouth))}`;
}

function getDefaultRemoteSlots() {
  return Array.from({ length: 6 }, (_value, index) => ({
    slotId: index + 1,
    title: `Slot ${index + 1}`,
    code: '',
    hasCode: false,
    syncState: 'local-only',
  }));
}

function renderRemoteSlots(slots, reachable) {
  return slots.map((slot) => {
    const statusLabel = slot.hasCode ? slot.syncState : 'empty';
    const disabledRun = reachable && slot.hasCode ? '' : ' disabled';
    return `
      <article class="remote-slot-card" data-remote-slot="${slot.slotId}">
        <div class="remote-slot-header">
          <h3>Button ${slot.slotId}</h3>
          <p>${escapeHtml(statusLabel)}</p>
        </div>
        <p class="remote-slot-title">${escapeHtml(slot.title)}</p>
        <div class="remote-slot-actions">
          <button type="button" class="secondary-button" data-slot-load="${slot.slotId}">Load To Editor</button>
          <button type="button" class="secondary-button" data-slot-save="${slot.slotId}">Save Current To Slot</button>
          <button type="button" class="secondary-button" data-slot-run="${slot.slotId}"${disabledRun}>Run Slot</button>
        </div>
      </article>
    `;
  }).join('');
}

function renderCommandButton(command, { reachable, labelOverride = null } = {}) {
  const disabled = reachable ? '' : ' disabled';
  const verificationLabel = command.confirmed ? 'confirmed' : 'unverified';
  const icon = COMMAND_ICONS[command.id] ?? '•';
  const label = labelOverride ?? command.label;

  return `<button class="control-button" data-command="${command.id}" aria-label="${escapeHtml(label)}"${disabled}><span class="button-icon" aria-hidden="true">${escapeHtml(icon)}</span><span class="command-label">${escapeHtml(label)}</span><span class="verification">${verificationLabel}</span></button>`;
}

function splitCommands(commands) {
  return {
    movement: commands.filter((command) => command.category === 'movement'),
    advanced: commands.filter((command) => command.category !== 'movement' && command.category !== 'experimental'),
    experimental: commands.filter((command) => command.category === 'experimental'),
  };
}

function getToyboxButtons() {
  return [
    { label: 'Dance Party', snippetId: 'party-mode' },
    { label: 'Sleepy', snippetId: 'sleepy' },
    { label: 'Nap Mode', snippetId: 'nap-mode' },
    { label: 'Wake Up', snippetId: 'wake-up' },
    { label: 'Clap Dance', snippetId: 'clap-dance' },
    { label: 'Clap Come Here', snippetId: 'clap-come-here' },
    { label: 'Spooky Face', snippetId: 'spooky-face' },
    { label: 'Touch Wag', snippetId: 'touch-wag' },
    { label: 'Guard Dog', snippetId: 'guard-dog' },
    { label: 'Obstacle Escape', snippetId: 'obstacle-escape' },
    { label: 'Random Mood', snippetId: 'random-mood' },
    { label: 'Disco Mode', snippetId: 'disco-mode' },
    { label: 'Surprise Me', snippetId: 'surprise-me' },
    { label: 'Rainbow Burst', snippetId: 'rainbow-burst' },
    { label: 'Giggle Beeps', snippetId: 'giggle-beeps' },
  ].map((button) => ({
    ...button,
    icon: TOYBOX_ICONS[button.snippetId] ?? '•',
  }));
}

function getSnippetById(snippets, snippetId) {
  return snippets.find((snippet) => snippet.id === snippetId) ?? null;
}

function normalizeSnippetId(name) {
  return name
    .toLowerCase()
    .trim()
    .replaceAll(/[^a-z0-9]+/g, '-')
    .replaceAll(/^-+|-+$/g, '');
}

function loadUserSnippets() {
  if (typeof localStorage === 'undefined') {
    return [];
  }

  try {
    const raw = localStorage.getItem(USER_SNIPPETS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveUserSnippets(snippets) {
  if (typeof localStorage === 'undefined') {
    return;
  }

  localStorage.setItem(USER_SNIPPETS_STORAGE_KEY, JSON.stringify(snippets));
}

function normalizeBaseUrl(baseUrl = DEFAULT_DIRECT_BASE_URL) {
  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
}

function buildPythonScript(body) {
  return body.startsWith('from pyxel import Pyxel')
    ? body
    : `${DEFAULT_RAW_PYTHON}${body}`;
}

function buildCommandRequest(commandId) {
  return COMMAND_CATALOG.find((command) => command.id === commandId) ?? null;
}

function getStorageValue(storageImpl, key, fallback) {
  try {
    if (typeof storageImpl?.getItem === 'function') {
      return storageImpl.getItem(key) ?? fallback;
    }
    if (typeof storageImpl?.get === 'function') {
      return storageImpl.get(key) ?? fallback;
    }
    return fallback;
  } catch {
    return fallback;
  }
}

function setStorageValue(storageImpl, key, value) {
  try {
    if (typeof storageImpl?.setItem === 'function') {
      storageImpl.setItem(key, value);
      return;
    }
    if (typeof storageImpl?.set === 'function') {
      storageImpl.set(key, value);
    }
  } catch {
    // Ignore storage failures so private browsing still controls the dog.
  }
}

export function getInitialTransportMode({
  storageImpl = typeof localStorage !== 'undefined' ? localStorage : null,
  locationImpl = typeof location !== 'undefined' ? location : { protocol: 'http:' },
} = {}) {
  const savedMode = getStorageValue(storageImpl, TRANSPORT_MODE_STORAGE_KEY, null);
  if (savedMode === 'bridge' || savedMode === 'direct') {
    return savedMode;
  }

  return locationImpl.protocol === 'file:' ? 'direct' : 'bridge';
}

export function getInitialLabelMode({
  storageImpl = typeof localStorage !== 'undefined' ? localStorage : null,
} = {}) {
  const savedMode = getStorageValue(storageImpl, LABEL_MODE_STORAGE_KEY, null);
  return savedMode === 'labels' ? 'labels' : 'pictures';
}

function getInitialDirectBaseUrl({
  storageImpl = typeof localStorage !== 'undefined' ? localStorage : null,
} = {}) {
  return getStorageValue(storageImpl, DIRECT_BASE_URL_STORAGE_KEY, DEFAULT_DIRECT_BASE_URL);
}

export function getInitialWifiCredentials({
  storageImpl = typeof localStorage !== 'undefined' ? localStorage : null,
} = {}) {
  return {
    ssid: getStorageValue(storageImpl, DOG_WIFI_SSID_STORAGE_KEY, DEFAULT_DOG_WIFI_SSID),
    password: getStorageValue(storageImpl, DOG_WIFI_PASSWORD_STORAGE_KEY, DEFAULT_DOG_WIFI_PASSWORD),
  };
}

export async function copyTextToClipboard(text, navigatorImpl = typeof navigator !== 'undefined' ? navigator : null) {
  if (typeof navigatorImpl?.clipboard?.writeText !== 'function') {
    return {
      ok: false,
      reason: 'clipboard-unavailable',
    };
  }

  await navigatorImpl.clipboard.writeText(text);
  return { ok: true };
}

function createDefaultSlot(slotId) {
  return {
    slotId,
    title: `Slot ${slotId}`,
    code: '',
    hasCode: false,
    syncState: 'local-only',
    updatedAt: null,
  };
}

function normalizeRemoteSlots(rawSlots = []) {
  return Array.from({ length: 6 }, (_value, index) => {
    const slotId = index + 1;
    const existingSlot = rawSlots.find((slot) => Number(slot.slotId) === slotId);
    if (!existingSlot) {
      return createDefaultSlot(slotId);
    }

    return {
      slotId,
      title: existingSlot.title || `Slot ${slotId}`,
      code: existingSlot.code || '',
      hasCode: Boolean(existingSlot.code),
      syncState: existingSlot.syncState || 'local-only',
      updatedAt: existingSlot.updatedAt ?? null,
    };
  });
}

function loadDirectRemoteSlots(storageImpl) {
  try {
    const raw = storageImpl?.getItem?.(DIRECT_REMOTE_SLOTS_STORAGE_KEY);
    return normalizeRemoteSlots(raw ? JSON.parse(raw).slots : []);
  } catch {
    return normalizeRemoteSlots();
  }
}

function saveDirectRemoteSlots(storageImpl, slots) {
  setStorageValue(storageImpl, DIRECT_REMOTE_SLOTS_STORAGE_KEY, JSON.stringify({ slots }));
}

function websocketSend({ WebSocketImpl, url, message }) {
  return new Promise((resolve, reject) => {
    const socket = new WebSocketImpl(url);
    socket.onopen = () => {
      socket.send(message);
      socket.close?.();
      resolve({ ok: true, transport: 'websocket', message });
    };
    socket.onerror = (error) => {
      reject(error);
    };
  });
}

export function createDirectDogTransport({
  baseUrl = DEFAULT_DIRECT_BASE_URL,
  fetchImpl = fetch,
  WebSocketImpl = typeof WebSocket !== 'undefined' ? WebSocket : null,
  storageImpl = typeof localStorage !== 'undefined' ? localStorage : null,
  healthTimeoutMs = DEFAULT_DIRECT_HEALTH_TIMEOUT_MS,
} = {}) {
  const normalizedBaseUrl = normalizeBaseUrl(baseUrl);
  const websocketUrl = normalizedBaseUrl.replace(/^http/i, 'ws') + '/ws';

  return {
    mode: 'direct',
    baseUrl: normalizedBaseUrl,

    async getHealth() {
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timeoutId = controller && Number.isFinite(healthTimeoutMs) && healthTimeoutMs > 0
        ? setTimeout(() => controller.abort(), healthTimeoutMs)
        : null;
      try {
        const response = await fetchImpl(`${normalizedBaseUrl}/command?getStatus=1`, {
          method: 'GET',
          ...(controller ? { signal: controller.signal } : {}),
        });
        const status = response.ok ? await response.json() : null;
        return {
          baseUrl: normalizedBaseUrl,
          reachable: response.ok,
          status: response.status,
          name: status?.name,
          firmware: status?.firmware,
          battery: status?.bat ?? status?.battery,
        };
      } catch (error) {
        return {
          baseUrl: normalizedBaseUrl,
          reachable: false,
          statusUnavailable: true,
          error: error.name ?? 'Error',
          message: error.message,
        };
      } finally {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      }
    },

    async getCommandCatalog() {
      return { commands: COMMAND_CATALOG };
    },

    async sendCommand(command) {
      if (command.transport === 'websocket') {
        if (!WebSocketImpl) {
          throw new Error('WebSocket is unavailable in this browser');
        }
        return websocketSend({ WebSocketImpl, url: websocketUrl, message: command.payload });
      }

      if (command.transport === 'python') {
        const code = buildPythonScript(command.pythonBody ?? '');
        return this.runPython(code);
      }

      throw new Error(`Unsupported transport: ${command.transport}`);
    },

    async runPython(code) {
      const fileName = 'run.py';
      const formData = new FormData();
      formData.append('file', new Blob([code], { type: 'text/plain' }), fileName);
      const response = await fetchImpl(`${normalizedBaseUrl}/uploadFile`, {
        method: 'POST',
        headers: {
          FileName: fileName,
          FileSize: `${code.length}`,
          RunScript: '1',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
        },
        body: formData,
      });

      return {
        ok: response.ok,
        status: response.status,
        fileName,
      };
    },

    async listRemoteSlots() {
      return { slots: loadDirectRemoteSlots(storageImpl) };
    },

    async saveRemoteSlot(slotId, payload) {
      const normalizedSlotId = Number.parseInt(`${slotId}`, 10);
      const slots = loadDirectRemoteSlots(storageImpl);
      const updatedSlot = {
        slotId: normalizedSlotId,
        title: `${payload?.title ?? `Slot ${normalizedSlotId}`}`.trim(),
        code: `${payload?.code ?? ''}`,
        hasCode: Boolean(`${payload?.code ?? ''}`.trim()),
        syncState: 'local-only',
        updatedAt: new Date().toISOString(),
      };
      slots[normalizedSlotId - 1] = updatedSlot;
      saveDirectRemoteSlots(storageImpl, slots);
      return { ok: true, slot: updatedSlot };
    },
  };
}

export function createBridgeTransport({ fetchImpl = fetch } = {}) {
  return {
    mode: 'bridge',
    async getHealth() {
      try {
        return await fetchJson('/api/health', undefined, fetchImpl);
      } catch (error) {
        return {
          mode: 'bridge',
          baseUrl: 'bridge API',
          reachable: false,
          statusUnavailable: true,
          error: error.name ?? 'Error',
          message: error.message,
        };
      }
    },
    async getCommandCatalog() {
      try {
        return await fetchJson('/api/commands', undefined, fetchImpl);
      } catch {
        return { commands: COMMAND_CATALOG };
      }
    },
    async sendCommand(command) {
      return fetchJson(`/api/commands/${command.id}`, { method: 'POST' }, fetchImpl);
    },
    async runPython(code) {
      return fetchJson('/api/commands/raw-python', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      }, fetchImpl);
    },
    async listRemoteSlots() {
      return fetchJson('/api/remote-slots', undefined, fetchImpl);
    },
    async saveRemoteSlot(slotId, payload) {
      return fetchJson(`/api/remote-slots/${slotId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }, fetchImpl);
    },
  };
}

export function buildPlaygroundSnippet({
  light = 1,
  sound = 1,
  expression = 1,
  eyes = expression,
  mouth = expression,
} = {}) {
  return `${DEFAULT_RAW_PYTHON}pyxel.Lights(${light},3)
pyxel.PlaySound(${sound},0,1)
pyxel.Eyes(${eyes},2)
pyxel.Mouth(${mouth})`;
}

function renderSnippetButtons(snippets) {
  return snippets.map((snippet) => (
    `<button class="snippet-chip" type="button" data-snippet-id="${snippet.id}">${escapeHtml(snippet.title)}</button>`
  )).join('');
}

export function createMovementController({
  sendCommand,
  setIntervalImpl = setInterval,
  clearIntervalImpl = clearInterval,
  repeatIntervalMs = 1500,
} = {}) {
  let activeCommandId = null;
  let repeatTimer = null;

  return {
    async start(commandId) {
      if (!commandId || commandId === 'stop') {
        return;
      }

      if (repeatTimer) {
        clearIntervalImpl(repeatTimer);
      }

      activeCommandId = commandId;
      await sendCommand(commandId);
      repeatTimer = setIntervalImpl(() => {
        void sendCommand(commandId);
      }, repeatIntervalMs);
    },

    async stop() {
      if (repeatTimer) {
        clearIntervalImpl(repeatTimer);
        repeatTimer = null;
      }

      if (!activeCommandId) {
        return;
      }

      activeCommandId = null;
      await sendCommand('stop');
    },
  };
}

export function renderApp({
  reachable,
  commands = COMMAND_CATALOG,
  status = null,
  snippets = BUILT_IN_SNIPPETS,
  remoteSlots = getDefaultRemoteSlots(),
  transportMode = 'bridge',
  directBaseUrl = DEFAULT_DIRECT_BASE_URL,
  wifiCredentials = getInitialWifiCredentials({ storageImpl: null }),
  labelMode = 'pictures',
} = {}) {
  const normalizedLabelMode = labelMode === 'labels' ? 'labels' : 'pictures';
  const { movement, advanced, experimental } = splitCommands(commands);
  const movementById = Object.fromEntries(movement.map((command) => [command.id, command]));
  const puppyExperimental = experimental.filter((command) => PUPPY_TRICK_EXPERIMENTAL_LABELS[command.id]);
  const movementTile = (commandId, label) => {
    const command = movementById[commandId] ?? { id: commandId, label, confirmed: true };
    const disabled = reachable ? '' : ' disabled';
    const tileClasses = commandId === 'stop' ? 'stop-button control-button movement-tile' : 'control-button movement-tile';
    const icon = COMMAND_ICONS[commandId] ?? '•';
    return `<button class="${tileClasses}" data-command="${command.id}" aria-label="${escapeHtml(label)}"${disabled}><span class="button-icon" aria-hidden="true">${escapeHtml(icon)}</span><span class="tile-label">${escapeHtml(label)}</span><span class="verification">${command.confirmed ? 'ready' : 'new'}</span></button>`;
  };
  const advancedMarkup = [
    ...advanced.map((command) => renderCommandButton(command, { reachable })),
    ...puppyExperimental.map((command) => renderCommandButton(command, {
      reachable,
      labelOverride: PUPPY_TRICK_EXPERIMENTAL_LABELS[command.id],
    })),
  ].join('');
  const experimentalMarkup = experimental.map((command) => renderCommandButton(command, { reachable })).join('');
  const toyboxMarkup = getToyboxButtons().map((button) => (
    `<button class="toybox-button" type="button" data-toybox-snippet="${button.snippetId}" aria-label="${escapeHtml(button.label)}"${reachable ? '' : ' disabled'}><span class="button-icon" aria-hidden="true">${escapeHtml(button.icon)}</span><span class="toybox-label">${escapeHtml(button.label)}</span></button>`
  )).join('');
  const connectionLabel = reachable ? 'Connected' : 'Disconnected';
  const deviceName = status?.name ? escapeHtml(status.name) : 'Unknown device';
  const firmware = status?.firmware ?? 'unknown';
  const battery = status?.battery ?? 'unknown';
  const bridgePressed = transportMode === 'bridge';
  const directPressed = transportMode === 'direct';
  const dogWifiSsid = wifiCredentials?.ssid ?? DEFAULT_DOG_WIFI_SSID;
  const dogWifiPassword = wifiCredentials?.password ?? DEFAULT_DOG_WIFI_PASSWORD;
  const picturesPressed = normalizedLabelMode === 'pictures';
  const labelsPressed = normalizedLabelMode === 'labels';
  const defaultPlaygroundValues = {
    light: 1,
    sound: 1,
    expression: 1,
    eyes: 1,
    mouth: 1,
  };

  return `
    <div class="app-surface label-mode-${normalizedLabelMode}">
    <section class="toddler-hero">
      <div class="hero-copy">
        <p class="eyebrow">PYXEL puppy mission</p>
        <h2>Play with your dog</h2>
        <div class="status-pills">
          <span class="status-pill ${reachable ? 'is-connected' : 'is-disconnected'}"><span class="sr-only">Connection: </span>${connectionLabel}</span>
          <span class="status-pill">${transportMode === 'direct' ? 'Direct' : 'Bridge'}</span>
        </div>
        <div class="label-toggle" role="group" aria-label="Button display">
          <button type="button" class="label-toggle-button${picturesPressed ? ' active' : ''}" data-label-mode="pictures" aria-label="Show pictures" aria-pressed="${picturesPressed}"><span aria-hidden="true">★</span><span>Pictures</span></button>
          <button type="button" class="label-toggle-button${labelsPressed ? ' active' : ''}" data-label-mode="labels" aria-label="Show words" aria-pressed="${labelsPressed}"><span aria-hidden="true">Aa</span><span>Words</span></button>
        </div>
      </div>
      <div class="dog-mascot" role="img" aria-label="Friendly robot puppy">
        <span class="dog-ear dog-ear-left"></span>
        <span class="dog-ear dog-ear-right"></span>
        <span class="dog-head">
          <span class="dog-eye dog-eye-left"></span>
          <span class="dog-eye dog-eye-right"></span>
          <span class="dog-nose"></span>
          <span class="dog-smile"></span>
        </span>
        <span class="dog-badge"></span>
      </div>
      <dl class="device-meta">
        <div><dt>Device</dt><dd>${deviceName}</dd></div>
        <div><dt>Firmware</dt><dd>${escapeHtml(firmware)}</dd></div>
        <div><dt>Battery</dt><dd>${escapeHtml(battery)}</dd></div>
      </dl>
    </section>
    <section class="panel play-panel">
      <div class="panel-header">
        <h2>Movement</h2>
        <p class="panel-copy">Big puppy buttons.</p>
      </div>
      <div class="movement-pad">
        <span></span>
        ${movementTile('forward', 'Go')}
        <span></span>
        ${movementTile('left', 'Left')}
        ${movementTile('stop', 'STOP')}
        ${movementTile('right', 'Right')}
        <span></span>
        ${movementTile('backward', 'Back')}
        <span></span>
      </div>
    </section>
    <section class="panel trick-panel">
      <div class="panel-header">
        <h2>Puppy Tricks</h2>
        <p class="panel-copy">Tap for a quick dog trick.</p>
      </div>
      <div class="advanced-grid">
        ${advancedMarkup}
      </div>
    </section>
    <section class="panel mood-panel">
      <div class="panel-header">
        <h2>Rainbow Moves</h2>
        <p class="panel-copy">Bright puppy moods.</p>
      </div>
      <div class="toybox-grid">
        ${toyboxMarkup}
      </div>
    </section>
    <details class="advanced-panel">
      <summary>Grown-up tools</summary>
      <section class="panel transport-panel">
        <div class="panel-header">
          <h2>Transport</h2>
          <p class="panel-copy">Choose the local bridge or talk straight to PYXEL on its Wi-Fi.</p>
        </div>
        <div class="transport-toggle" role="group" aria-label="Transport mode">
          <button type="button" class="secondary-button${bridgePressed ? ' active' : ''}" data-transport-mode="bridge" aria-pressed="${bridgePressed}">Bridge</button>
          <button type="button" class="secondary-button${directPressed ? ' active' : ''}" data-transport-mode="direct" aria-pressed="${directPressed}">Direct to Dog</button>
        </div>
        <label class="direct-url-label" for="direct-base-url">Dog URL</label>
        <input id="direct-base-url" class="direct-url-input" value="${escapeHtml(directBaseUrl)}" inputmode="url">
        <div class="standalone-download">
          <a class="secondary-button standalone-download-link" href="pyxel-standalone.html" download="pyxel-dog-remote.html">Download Standalone HTML</a>
          <p class="wifi-settings-note">Save this file to use the remote without the bridge. It opens from a file, defaults to Direct mode, and shows Disconnected instead of hanging when the dog is not reachable.</p>
          <p class="wifi-settings-note">The standalone file can be opened directly from a phone or tablet when you want to use Direct mode on the dog's Wi-Fi.</p>
        </div>
        <div class="dog-wifi-helper" aria-label="Dog Wi-Fi connection helper">
          <div class="dog-wifi-heading">
            <h3>Dog Wi-Fi</h3>
            <p>On iPhone, join this network before using Direct to Dog.</p>
          </div>
          <div class="dog-wifi-fields">
            <label for="dog-wifi-ssid">SSID</label>
            <div class="copy-row">
              <input id="dog-wifi-ssid" class="direct-url-input" value="${escapeHtml(dogWifiSsid)}" autocomplete="off" autocapitalize="none" spellcheck="false">
              <button type="button" class="secondary-button" data-copy-wifi="ssid">Copy SSID</button>
            </div>
            <label for="dog-wifi-password">Password</label>
            <div class="copy-row">
              <input id="dog-wifi-password" class="direct-url-input" value="${escapeHtml(dogWifiPassword)}" autocomplete="off" autocapitalize="none" spellcheck="false">
              <button type="button" class="secondary-button" data-copy-wifi="password">Copy Password</button>
            </div>
          </div>
          <a class="secondary-button wifi-settings-link" href="App-Prefs:root=WIFI">Open Wi-Fi Settings</a>
          <p class="wifi-settings-note">iOS may block this shortcut. If it does, open Settings, tap Wi-Fi, pick the dog, and paste the password.</p>
        </div>
      </section>
      ${experimentalMarkup ? `
      <section class="panel experimental-panel">
        <div class="panel-header">
          <h2>Experimental Commands</h2>
          <p class="panel-copy">Unverified actions from public PYXEL command notes.</p>
        </div>
        <div class="advanced-grid experimental-grid">
          ${experimentalMarkup}
        </div>
      </section>` : ''}
      <section class="panel">
        <div class="panel-header">
          <h2>Playground</h2>
          <p class="panel-copy">Pick a preset, preview it, or send it to the editor.</p>
        </div>
        <form id="playground-form" class="playground-form">
          <label>Light
            <select name="light">${createRangeOptions(PRESET_LABELS.light, defaultPlaygroundValues.light)}</select>
          </label>
          <label>Sound
            <select name="sound">${createRangeOptions(PRESET_LABELS.sound, defaultPlaygroundValues.sound)}</select>
          </label>
          <label>Expression
            <select name="expression">${createRangeOptions(PRESET_LABELS.expression, defaultPlaygroundValues.expression)}</select>
          </label>
          <label>Eyes
            <select name="eyes">${createRangeOptions(PRESET_LABELS.eyes, defaultPlaygroundValues.eyes)}</select>
          </label>
          <label>Mouth
            <select name="mouth">${createRangeOptions(PRESET_LABELS.mouth, defaultPlaygroundValues.mouth)}</select>
          </label>
          <div class="playground-actions">
            <button type="submit"${reachable ? '' : ' disabled'}>Preview</button>
            <button type="button" id="playground-load-editor">Send To Editor</button>
          </div>
        </form>
        <div class="preset-summary">
          <h3>Preset Combo</h3>
          <p id="playground-summary">${renderPresetSummary(defaultPlaygroundValues)}</p>
        </div>
      </section>
      <section class="panel">
        <div class="panel-header">
          <h2>Code Lab</h2>
          <p class="panel-copy">Load snippets, tweak them, and run whenever you want.</p>
        </div>
        <div class="snippet-groups">
          <div>
            <h3>Snippets</h3>
            <div class="snippet-grid" id="snippet-grid">
              ${renderSnippetButtons(snippets)}
            </div>
          </div>
        </div>
        <form id="raw-python-form" class="raw-python-form">
          <label class="raw-python-label" for="snippet-name">Snippet Name</label>
          <input id="snippet-name" name="snippet-name" class="snippet-name-input" placeholder="My silly trick">
          <label class="raw-python-label" for="raw-python">Raw Python</label>
          <textarea id="raw-python" name="raw-python" rows="12">${escapeHtml(DEFAULT_RAW_PYTHON)}</textarea>
          <div class="code-lab-actions">
            <button class="raw-python-submit" type="submit"${reachable ? '' : ' disabled'}>Run Python</button>
            <button class="secondary-button" type="button" id="save-snippet">Save Snippet</button>
            <button class="secondary-button" type="button" id="delete-snippet">Delete Snippet</button>
          </div>
        </form>
      </section>
      <section class="panel">
        <div class="panel-header">
          <h2>Code Activator</h2>
          <p class="panel-copy">Manage six saved remote buttons from this app.</p>
        </div>
        <div class="remote-slot-grid" id="remote-slot-grid">
          ${renderRemoteSlots(remoteSlots, reachable)}
        </div>
      </section>
    </details>
    </div>
  `;
}

async function fetchJson(url, options, fetchImpl = fetch) {
  const response = await fetchImpl(url, options);
  return response.json();
}

function getPlaygroundValues(form) {
  const formData = new FormData(form);

  return {
    light: Number(formData.get('light')),
    sound: Number(formData.get('sound')),
    expression: Number(formData.get('expression')),
    eyes: Number(formData.get('eyes')),
    mouth: Number(formData.get('mouth')),
  };
}

async function boot() {
  const statusElement = document.querySelector('#status');
  const controlsElement = document.querySelector('#controls');
  const resultElement = document.querySelector('#results');

  if (!statusElement || !controlsElement || !resultElement) {
    return;
  }

  const storageImpl = typeof localStorage !== 'undefined' ? localStorage : null;
  const transportMode = getInitialTransportMode({ storageImpl });
  const labelMode = getInitialLabelMode({ storageImpl });
  const directBaseUrl = getInitialDirectBaseUrl({ storageImpl });
  const wifiCredentials = getInitialWifiCredentials({ storageImpl });
  const transport = transportMode === 'direct'
    ? createDirectDogTransport({ baseUrl: directBaseUrl, storageImpl })
    : createBridgeTransport();

  const [health, commandCatalog] = await Promise.all([
    transport.getHealth(),
    transport.getCommandCatalog(),
  ]);
  const remoteSlotsResponse = await transport.listRemoteSlots().catch(() => ({
    slots: getDefaultRemoteSlots(),
  }));

  const modeLabel = transportMode === 'direct' ? 'Direct mode' : 'Bridge';
  statusElement.textContent = health.reachable
    ? `${modeLabel} connected to ${health.baseUrl ?? directBaseUrl}`
    : `${modeLabel} cannot reach ${health.baseUrl ?? directBaseUrl}`;

  const userSnippets = loadUserSnippets();
  const snippets = [...BUILT_IN_SNIPPETS, ...userSnippets];

  controlsElement.innerHTML = renderApp({
    reachable: health.reachable,
    commands: commandCatalog.commands,
    transportMode,
    labelMode,
    directBaseUrl,
    wifiCredentials,
    status: {
      name: health.name,
      firmware: health.firmware,
      battery: health.battery,
    },
    snippets,
    remoteSlots: remoteSlotsResponse.slots,
  });

  const editor = controlsElement.querySelector('#raw-python');
  const snippetNameInput = controlsElement.querySelector('#snippet-name');
  const snippetGrid = controlsElement.querySelector('#snippet-grid');
  const remoteSlotGrid = controlsElement.querySelector('#remote-slot-grid');
  let activeSnippets = [...snippets];
  let activeRemoteSlots = [...(remoteSlotsResponse.slots ?? getDefaultRemoteSlots())];

  controlsElement.querySelectorAll('[data-transport-mode]').forEach((button) => {
    button.addEventListener('click', () => {
      setStorageValue(storageImpl, TRANSPORT_MODE_STORAGE_KEY, button.dataset.transportMode);
      window.location.reload();
    });
  });

  controlsElement.querySelectorAll('[data-label-mode]').forEach((button) => {
    button.addEventListener('click', () => {
      setStorageValue(storageImpl, LABEL_MODE_STORAGE_KEY, button.dataset.labelMode);
      window.location.reload();
    });
  });

  controlsElement.querySelector('#direct-base-url')?.addEventListener('change', (event) => {
    setStorageValue(storageImpl, DIRECT_BASE_URL_STORAGE_KEY, event.target.value.trim() || DEFAULT_DIRECT_BASE_URL);
    if (transportMode === 'direct') {
      window.location.reload();
    }
  });

  const wifiSsidInput = controlsElement.querySelector('#dog-wifi-ssid');
  const wifiPasswordInput = controlsElement.querySelector('#dog-wifi-password');
  wifiSsidInput?.addEventListener('change', (event) => {
    setStorageValue(storageImpl, DOG_WIFI_SSID_STORAGE_KEY, event.target.value.trim() || DEFAULT_DOG_WIFI_SSID);
  });
  wifiPasswordInput?.addEventListener('change', (event) => {
    setStorageValue(storageImpl, DOG_WIFI_PASSWORD_STORAGE_KEY, event.target.value.trim() || DEFAULT_DOG_WIFI_PASSWORD);
  });

  controlsElement.querySelectorAll('[data-copy-wifi]').forEach((button) => {
    button.addEventListener('click', async () => {
      const field = button.dataset.copyWifi === 'password' ? wifiPasswordInput : wifiSsidInput;
      const label = button.dataset.copyWifi === 'password' ? 'password' : 'SSID';
      const result = await copyTextToClipboard(field?.value ?? '');
      resultElement.textContent = result.ok
        ? `Copied dog Wi-Fi ${label}.`
        : `Could not copy dog Wi-Fi ${label}. Select the field and copy it manually.`;
    });
  });

  const bindSnippetButtons = () => {
    controlsElement.querySelectorAll('[data-snippet-id]').forEach((button) => {
      button.addEventListener('click', () => {
        const snippet = getSnippetById(activeSnippets, button.dataset.snippetId);
        if (!snippet) {
          return;
        }
        editor.value = snippet.code;
        snippetNameInput.value = snippet.title;
        resultElement.textContent = `Loaded snippet: ${snippet.title}`;
      });
    });
  };

  const refreshSnippetGrid = () => {
    activeSnippets = [...BUILT_IN_SNIPPETS, ...loadUserSnippets()];
    if (snippetGrid) {
      snippetGrid.innerHTML = renderSnippetButtons(activeSnippets);
      bindSnippetButtons();
    }
  };

  const runPython = async (code) => {
    const response = await transport.runPython(code);
    resultElement.textContent = response.ok
      ? 'Sent raw Python script'
      : `${response.code}: ${response.message}`;
  };

  const refreshRemoteSlots = async () => {
    const response = await transport.listRemoteSlots().catch(() => ({
      slots: activeRemoteSlots,
    }));
    activeRemoteSlots = response.slots ?? activeRemoteSlots;
    if (remoteSlotGrid) {
      remoteSlotGrid.innerHTML = renderRemoteSlots(activeRemoteSlots, health.reachable);
      bindRemoteSlotButtons();
    }
  };

  const sendCommand = async (commandId) => {
    const command = buildCommandRequest(commandId);
    if (!command) {
      resultElement.textContent = `Unknown command: ${commandId}`;
      return;
    }
    const response = await transport.sendCommand(command);
    resultElement.textContent = response.ok
      ? `Sent ${commandId}`
      : `${response.code}: ${response.message}`;
  };

  const bindRemoteSlotButtons = () => {
    controlsElement.querySelectorAll('[data-slot-load]').forEach((button) => {
      button.addEventListener('click', () => {
        const slotId = Number(button.dataset.slotLoad);
        const slot = activeRemoteSlots.find((entry) => entry.slotId === slotId);
        if (!slot?.hasCode) {
          resultElement.textContent = `Slot ${slotId} is empty`;
          return;
        }

        editor.value = slot.code;
        snippetNameInput.value = slot.title;
        resultElement.textContent = `Loaded slot ${slotId}: ${slot.title}`;
      });
    });

    controlsElement.querySelectorAll('[data-slot-save]').forEach((button) => {
      button.addEventListener('click', async () => {
        const slotId = Number(button.dataset.slotSave);
        const title = snippetNameInput.value.trim() || `Slot ${slotId}`;
        const response = await transport.saveRemoteSlot(slotId, {
          title,
          code: editor.value,
        });

        resultElement.textContent = response.ok
          ? `Saved slot ${slotId}: ${response.slot.title}`
          : `${response.code}: ${response.message}`;

        if (response.ok) {
          await refreshRemoteSlots();
        }
      });
    });

    controlsElement.querySelectorAll('[data-slot-run]').forEach((button) => {
      button.addEventListener('click', async () => {
        const slotId = Number(button.dataset.slotRun);
        const slot = activeRemoteSlots.find((entry) => entry.slotId === slotId);
        if (!slot?.hasCode) {
          resultElement.textContent = `Slot ${slotId} is empty`;
          return;
        }

        editor.value = slot.code;
        snippetNameInput.value = slot.title;
        await runPython(slot.code);
        resultElement.textContent = `Ran slot ${slotId}: ${slot.title}`;
      });
    });
  };

  const movementController = createMovementController({ sendCommand });

  controlsElement.querySelectorAll('[data-command]').forEach((button) => {
    const commandId = button.dataset.command;
    const isMovement = ['forward', 'backward', 'left', 'right'].includes(commandId);

    if (isMovement) {
      button.addEventListener('pointerdown', async (event) => {
        event.preventDefault();
        await movementController.start(commandId);
      });
      button.addEventListener('pointerup', async () => {
        await movementController.stop();
      });
      button.addEventListener('pointerleave', async () => {
        await movementController.stop();
      });
      button.addEventListener('pointercancel', async () => {
        await movementController.stop();
      });
      button.addEventListener('click', (event) => {
        event.preventDefault();
      });
      return;
    }

    button.addEventListener('click', async () => {
      await sendCommand(commandId);
    });
  });

  controlsElement.querySelectorAll('[data-toybox-snippet]').forEach((button) => {
    button.addEventListener('click', async () => {
      const snippet = getSnippetById(activeSnippets, button.dataset.toyboxSnippet);
      if (!snippet) {
        return;
      }
      editor.value = snippet.code;
      snippetNameInput.value = snippet.title;
      await runPython(snippet.code);
    });
  });

  bindSnippetButtons();
  bindRemoteSlotButtons();

  const playgroundForm = controlsElement.querySelector('#playground-form');
  const playgroundLoadButton = controlsElement.querySelector('#playground-load-editor');
  const playgroundSummary = controlsElement.querySelector('#playground-summary');
  const syncPlaygroundSummary = () => {
    if (!playgroundForm || !playgroundSummary) {
      return;
    }

    playgroundSummary.textContent = renderPresetSummary(getPlaygroundValues(playgroundForm));
  };

  playgroundForm?.addEventListener('input', syncPlaygroundSummary);
  syncPlaygroundSummary();
  playgroundForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const code = buildPlaygroundSnippet(getPlaygroundValues(playgroundForm));
    editor.value = code;
    snippetNameInput.value = 'Playground Mix';
    await runPython(code);
  });
  playgroundLoadButton?.addEventListener('click', () => {
    const code = buildPlaygroundSnippet(getPlaygroundValues(playgroundForm));
    editor.value = code;
    snippetNameInput.value = 'Playground Mix';
    resultElement.textContent = 'Loaded playground mix into the editor';
  });

  const rawPythonForm = controlsElement.querySelector('#raw-python-form');
  rawPythonForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    await runPython(editor.value);
  });

  controlsElement.querySelector('#save-snippet')?.addEventListener('click', () => {
    const title = snippetNameInput.value.trim();
    if (!title) {
      resultElement.textContent = 'Add a snippet name before saving';
      return;
    }

    const savedSnippets = loadUserSnippets().filter((snippet) => snippet.title !== title);
    savedSnippets.push({
      id: normalizeSnippetId(title),
      title,
      code: editor.value,
    });
    saveUserSnippets(savedSnippets);
    refreshSnippetGrid();
    resultElement.textContent = `Saved snippet: ${title}`;
  });

  controlsElement.querySelector('#delete-snippet')?.addEventListener('click', () => {
    const title = snippetNameInput.value.trim();
    if (!title) {
      resultElement.textContent = 'Enter the saved snippet name to delete it';
      return;
    }

    const savedSnippets = loadUserSnippets();
    const nextSnippets = savedSnippets.filter((snippet) => snippet.title !== title);
    saveUserSnippets(nextSnippets);
    refreshSnippetGrid();
    resultElement.textContent = `Deleted saved snippet: ${title}`;
  });

  const keyMap = new Map([
    ['ArrowUp', 'forward'],
    ['ArrowDown', 'backward'],
    ['ArrowLeft', 'left'],
    ['ArrowRight', 'right'],
    [' ', 'stop'],
  ]);

  document.addEventListener('keydown', async (event) => {
    if (!health.reachable) {
      return;
    }

    const commandId = keyMap.get(event.key);
    if (!commandId || event.repeat) {
      return;
    }

    event.preventDefault();
    if (commandId === 'stop') {
      await movementController.stop();
      return;
    }

    await movementController.start(commandId);
  });

  document.addEventListener('keyup', async (event) => {
    if (!health.reachable || !keyMap.has(event.key)) {
      return;
    }

    event.preventDefault();
    await movementController.stop();
  });
}

if (typeof document !== 'undefined') {
  boot();
}
