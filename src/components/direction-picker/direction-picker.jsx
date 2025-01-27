import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Popover from 'react-popover';
import {injectIntl, intlShape, defineMessages, FormattedMessage} from 'react-intl';

import Label from '../forms/label.jsx';
import Input from '../forms/input.jsx';
import BufferedInputHOC from '../forms/buffered-input-hoc.jsx';
import Dial from './dial.jsx';

import styles from './direction-picker.css';

import allAroundIcon from './icon--all-around.svg';
import turn180Icon from './icon--turn-180.svg';
import leftRightIcon from './icon--left-right.svg';
import upDownIcon from './icon--up-down.svg';
import dontRotateIcon from './icon--dont-rotate.svg';
import lookAtIcon from './icon--look-at.svg';

const BufferedInput = BufferedInputHOC(Input);

const directionLabel = (
    <FormattedMessage
        defaultMessage="Direction"
        description="Sprite info direction label"
        id="gui.SpriteInfo.direction"
    />
);

const RotationStyles = {
    ALL_AROUND: 'all around',
    LOOK_AT: 'look at',
    LEFT_RIGHT: 'left-right',
    UP_DOWN: 'up-down',
    DONT_ROTATE: "don't rotate",
};

const messages = defineMessages({
    allAround: {
        id: 'gui.directionPicker.rotationStyles.allAround',
        description: 'Button to change to the all around rotation style',
        defaultMessage: 'All Around'
    },
    allAround: {
        id: 'gui.directionPicker.rotationStyles.turn180',
        description: 'Button to change to the turn 180 rotation style',
        defaultMessage: 'Turn 180'
    },
    lookAt: {
        id: 'gui.directionPicker.rotationStyles.lookAt',
        description: 'Button to change to the look at rotation style',
        defaultMessage: 'Look At'
    },
    leftRight: {
        id: 'gui.directionPicker.rotationStyles.leftRight',
        description: 'Button to change to the left-right rotation style',
        defaultMessage: 'Left/Right'
    },
    upDown: {
        id: 'gui.directionPicker.rotationStyles.upDown',
        description: 'Button to change to the up-down rotation style',
        defaultMessage: 'Up/Down'
    },
    dontRotate: {
        id: 'gui.directionPicker.rotationStyles.dontRotate',
        description: 'Button to change to the dont rotate rotation style',
        defaultMessage: 'Do not rotate'
    }
});

const DirectionPicker = props => (
    <Label
        secondary
        above={props.labelAbove}
        text={directionLabel}
    >
        <Popover
            body={
                <div>
                    <Dial
                        direction={props.direction}
                        onChange={props.onChangeDirection}
                    />
                    <div className={styles.buttonRow}>
                        <button
                            className={classNames(styles.iconButton, {
                                [styles.active]: props.rotationStyle === RotationStyles.ALL_AROUND
                            })}
                            title={props.intl.formatMessage(messages.allAround)}
                            onClick={props.onClickAllAround}
                        >
                            <img
                                draggable={false}
                                src={allAroundIcon}
                            />
                        </button>
                        <button
                            className={classNames(styles.iconButton, {
                                [styles.active]: props.rotationStyle === RotationStyles.TURN_180
                            })}
                            title={props.intl.formatMessage(messages.turn180)}
                            onClick={props.onClickTurn180}
                        >
                            <img
                                draggable={false}
                                src={turn180Icon}
                            />
                        </button>
                        <button
                            className={classNames(styles.iconButton, {
                                [styles.active]: props.rotationStyle === RotationStyles.LOOK_AT
                            })}
                            title={props.intl.formatMessage(messages.lookAt)}
                            onClick={props.onClickLookAt}
                        >
                            <img
                                draggable={false}
                                src={lookAtIcon}
                            />
                        </button>
                        <button
                            className={classNames(styles.iconButton, {
                                [styles.active]: props.rotationStyle === RotationStyles.LEFT_RIGHT
                            })}
                            title={props.intl.formatMessage(messages.leftRight)}
                            onClick={props.onClickLeftRight}
                        >
                            <img
                                draggable={false}
                                src={leftRightIcon}
                            />
                        </button>
                        <button
                            className={classNames(styles.iconButton, {
                                [styles.active]: props.rotationStyle === RotationStyles.UP_DOWN
                            })}
                            title={props.intl.formatMessage(messages.upDown)}
                            onClick={props.onClickUpDown}
                        >
                            <img
                                draggable={false}
                                src={upDownIcon}
                            />
                        </button>
                        <button
                            className={classNames(styles.iconButton, {
                                [styles.active]: props.rotationStyle === RotationStyles.DONT_ROTATE
                            })}
                            title={props.intl.formatMessage(messages.dontRotate)}
                            onClick={props.onClickDontRotate}
                        >
                            <img
                                draggable={false}
                                src={dontRotateIcon}
                            />
                        </button>
                    </div>
                </div>
            }
            isOpen={props.popoverOpen}
            preferPlace="above"
            onOuterAction={props.onClosePopover}
        >
            <BufferedInput
                small
                disabled={props.disabled}
                label={directionLabel}
                tabIndex="0"
                type="text"
                value={props.disabled ? '' : props.direction}
                onFocus={props.onOpenPopover}
                onSubmit={props.onChangeDirection}
            />
        </Popover>
    </Label>

);

DirectionPicker.propTypes = {
    direction: PropTypes.number,
    disabled: PropTypes.bool.isRequired,
    intl: intlShape,
    labelAbove: PropTypes.bool,
    onChangeDirection: PropTypes.func.isRequired,
    onClickAllAround: PropTypes.func.isRequired,
    onClickTurn180: PropTypes.func.isRequired,
    onClickDontRotate: PropTypes.func.isRequired,
    onClickLeftRight: PropTypes.func.isRequired,
    onClickLookAt: PropTypes.func.isRequired,
    onClickUpDown: PropTypes.func.isRequired,
    onClosePopover: PropTypes.func.isRequired,
    onOpenPopover: PropTypes.func.isRequired,
    popoverOpen: PropTypes.bool.isRequired,
    rotationStyle: PropTypes.string
};

DirectionPicker.defaultProps = {
    labelAbove: false
};

const WrappedDirectionPicker = injectIntl(DirectionPicker);

export {
    WrappedDirectionPicker as default,
    RotationStyles
};
