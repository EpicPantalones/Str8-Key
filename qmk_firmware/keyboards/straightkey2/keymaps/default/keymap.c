// Copyright 2023 QMK
// SPDX-License-Identifier: GPL-2.0-or-later

#include QMK_KEYBOARD_H

enum layers {
    _ALPHA_QWERTY = 0,
    _NUMBER,
    _FUNCTION,
    _CTL,
};

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
/*
     * ┌───┬───┬───┬───┬───┬───┐       ┌───┬───┬───┬───┬───┬───┐
     * │ESC│ 1 │ 2 │ 3 │ 4 │ 5 │       │ 6 │ 7 │ 8 │ 9 │ O │CAP│
     * ├───┼───┼───┼───┼───┼───┤       ├───┼───┼───┼───┼───┼───┤
     * │FND│ Q │ W │ E │ R │ T │       │ Y │ U │ I │ O │ P │PLY│
     * ├───┼───┼───┼───┼───┼───┤       ├───┼───┼───┼───┼───┼───┤
     * │CPY│ A │ S │ D │ F │ G │       │ H │ J │ K │ L │ ; │SKP│
     * ├───┼───┼───┼───┼───┼───┤       ├───┼───┼───┼───┼───┼───┤
     * │PST│ Z │ X │ C │ V │ B │       │ N │ M │ , │ . │ / │PRT│
     * └───┴───┴───┴───┴───┴───┘       └───┴───┴───┴───┴───┴───┘
     *                 ┌───┬───┐       ┌───┬───┐
     *                 │BSP│MDU│       │MDD│BSP│
     *             ┌───┼───┴───┤       ├───┴───┼───┐
     *             │SFT│SPC│CTL│       │TAB│SPC│GUI│
     *             └───┴───┴───┘       └───┴───┴───┘
     
     
     */

    [_ALPHA_QWERTY] = LAYOUT_straight(
        KC_ESCAPE,  KC_1,       KC_2,   KC_3,   KC_4,   KC_5,   XXXXXXX,    XXXXXXX,        XXXXXXX,    XXXXXXX,    KC_6,   KC_7,   KC_8,       KC_9,   KC_0,       KC_CAPS,
        KC_CUT,     KC_Q,       KC_W,   KC_E,   KC_R,   KC_T,   KC_BSPC,    TG(_FUNCTION),  KC_DEL,     TG(_CTL),   KC_Y,   KC_U,   KC_I,       KC_O,   KC_P,       KC_MPLY,
        KC_A,       KC_COPY,    KC_S,   KC_D,   KC_F,   KC_G,   KC_SPC,     KC_LCTL,        KC_SPC,     KC_TAB,     KC_H,   KC_J,   KC_K,       KC_L,   KC_SCLN,    KC_MNXT,
        KC_PASTE,   KC_Z,       KC_X,   KC_C,   KC_V,   KC_B,   KC_LSFT,    XXXXXXX,        KC_LGUI,     XXXXXXX,   KC_N,   KC_M,   KC_COMM,    KC_DOT, KC_SLSH,    KC_PSCR
    ),
    /*                          
     * ┌───┬───┬───┬───┬───┐       ┌───┬───┬───┬───┬───┐
     * │F1 │F2 │F3 │F4 │F5 │       │F6 │F7 │F8 │F9 │F10│
     * ├───┼───┼───┼───┼───┤       ├───┼───┼───┼───┼───┤
     * │CTL│SFT│ALT│TAB│GUI│       │PUp│PDw│UP │End│F11│
     * ├───┼───┼───┼───┼───┤       ├───┼───┼───┼───┼───┤
     * │PSC│Cap│   │   │   │       │PDw│LFT│DWN│RIT│F12│
     * └───┴───┴───┴───┴───┘       └───┴───┴───┴───┴───┘
     *           ┌───┐                   ┌───┐
     *           │MO1├───┐           ┌───┤MO2│
     *           └───┤SPC├───┐   ┌───┤Ent├───┘
     *               └───┤BSP│   │DEL├───┘
     *                   └───┘   └───┘
     */
    [_FUNCTION]     = LAYOUT_straight(
        TG(_FUNCTION),KC_1,KC_2,KC_3,KC_4,KC_5,XXXXXXX,XXXXXXX,XXXXXXX,XXXXXXX,KC_6,KC_7,KC_8,KC_9,KC_0,KC_X,
        KC_X,KC_Q,KC_W,KC_E,KC_R,KC_T,KC_X,   XXXXXXX,XXXXXXX,KC_X,   KC_Y,KC_U,KC_I,KC_O,KC_P,KC_X,
        KC_X,KC_A,KC_S,KC_D,KC_F,KC_G,KC_SPC, KC_X,   KC_X,   KC_SPC, KC_H,KC_J,KC_K,KC_L,KC_SCLN,KC_X,
        KC_X,KC_Z,KC_X,KC_C,KC_V,KC_B,KC_X,   KC_X,   KC_X,   KC_X,   KC_N,KC_M,KC_COMM,KC_DOT,KC_SLSH,KC_X
    ),
    /*
     * ┌───┬───┬───┬───┬───┐       ┌───┬───┬───┬───┬───┐
     * │ 1 │ 2 │ 3 │ 4 │ 5 │       │ 6 │ 7 │ 8 │ 9 │  0│
     * ├───┼───┼───┼───┼───┤       ├───┼───┼───┼───┼───┤
     * │CTL│SFT│ALT│TAB│GUI│       │   │ ` │ ' │ [ │ ] │
     * ├───┼───┼───┼───┼───┤       ├───┼───┼───┼───┼───┤
     * │   │   │   │   │   │       │   │ - │ = │ \ │ / │
     * └───┴───┴───┴───┴───┘       └───┴───┴───┴───┴───┘
     *           ┌───┐                   ┌───┐
     *           │MO1├───┐           ┌───┤MO2│
     *           └───┤SPC├───┐   ┌───┤Ent├───┘
     *               └───┤BSP│   │DEL├───┘
     *                   └───┘   └───┘
     */
    [_NUMBER]       = LAYOUT_straight(
        TG(_NUMBER),KC_1,KC_2,KC_3,KC_4,KC_5,XXXXXXX,XXXXXXX,XXXXXXX,XXXXXXX,KC_6,KC_7,KC_8,KC_9,KC_0,KC_X,
        KC_X,KC_Q,KC_W,KC_E,KC_R,KC_T,KC_X,   XXXXXXX,XXXXXXX,KC_X,   KC_Y,KC_U,KC_I,KC_O,KC_P,KC_X,
        KC_X,KC_A,KC_S,KC_D,KC_F,KC_G,KC_SPC, KC_X,   KC_X,   KC_SPC, KC_H,KC_J,KC_K,KC_L,KC_SCLN,KC_X,
        KC_X,KC_Z,KC_X,KC_C,KC_V,KC_B,KC_X,   KC_X,   KC_X,   KC_X,   KC_N,KC_M,KC_COMM,KC_DOT,KC_SLSH,KC_X
    ),
    [_CTL]          = LAYOUT_straight(
        TG(_CTL),KC_1,KC_2,KC_3,KC_4,KC_5,XXXXXXX,XXXXXXX,XXXXXXX,XXXXXXX,KC_6,KC_7,KC_8,KC_9,KC_0,KC_X,
        KC_Y,KC_Q,KC_W,KC_E,KC_R,KC_T,KC_X,   XXXXXXX,XXXXXXX,KC_X,   KC_Y,KC_U,KC_I,KC_O,KC_P,KC_X,
        KC_Y,KC_A,KC_S,KC_D,KC_F,KC_G,KC_SPC, KC_X,   KC_X,   KC_SPC, KC_H,KC_J,KC_K,KC_L,KC_SCLN,KC_X,
        KC_Y,KC_Z,KC_X,KC_C,KC_V,KC_B,KC_X,   KC_X,   KC_X,   KC_X,   KC_N,KC_M,KC_COMM,KC_DOT,KC_SLSH,KC_X
    ),
};


// Defining combos
const uint16_t PROGMEM layers_combo[] = {MO(_NUMBER), MO(_FUNCTION), COMBO_END};
const uint16_t PROGMEM escape[] = {CTL_T(KC_A), KC_Q, COMBO_END};
// Enabling combos
combo_t key_combos[]   = {
    COMBO(layers_combo, MO(_CTL)),
    COMBO(escape, KC_ESC),
};
