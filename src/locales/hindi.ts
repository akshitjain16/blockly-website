// src/locales/hindi.ts
import * as Blockly from 'blockly';

export const setHindiLocale = () => {
  Blockly.setLocale({
    // General Terms
    BKY_LOGIC_HUE: 'तर्क',
    BKY_LOOPS_HUE: 'लूप',
    BKY_MATH_HUE: 'गणित',
    BKY_TEXTS_HUE: 'टेक्स्ट',
    BKY_LISTS_HUE: 'सूची',
    BKY_VARIABLES_HUE: 'चर',
    BKY_PROCEDURES_HUE: 'फ़ंक्शन',

    // Logic Blocks
    CONTROLS_IF_MSG_IF: 'अगर',
    CONTROLS_IF_MSG_THEN: 'तो',
    CONTROLS_IF_MSG_ELSE: 'वरना',
    LOGIC_COMPARE_TOOLTIP_EQ: 'यदि दोनों मान समान हैं, तो सही लौटाएं।',
    LOGIC_COMPARE_TOOLTIP_NEQ: 'यदि दोनों मान अलग-अलग हैं, तो सही लौटाएं।',
    LOGIC_OPERATION_AND: 'और',
    LOGIC_OPERATION_OR: 'या',
    LOGIC_NEGATE_TITLE: 'नहीं %1',
    LOGIC_BOOLEAN_TRUE: 'सही',
    LOGIC_BOOLEAN_FALSE: 'गलत',
    LOGIC_NULL_TOOLTIP: 'खाली मान लौटाएं।',
    LOGIC_TERNARY_CONDITION: 'शर्त',
    LOGIC_TERNARY_IF_TRUE: 'यदि सही',
    LOGIC_TERNARY_IF_FALSE: 'यदि गलत',
    LOGIC_NULL: 'खाली',
    

    // Loops Blocks
    CONTROLS_REPEAT_TITLE: '%1 बार दोहराएं',
    CONTROLS_WHILEUNTIL_INPUT_DO: 'करें',
    CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'जब तक',
    CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'जब तक नहीं',
    CONTROLS_FOR_TITLE: '%1 के लिए %2 से %3 तक, %4 कदम बढ़ाएं',
    CONTROLS_FOREACH_TITLE: '%1 के लिए प्रत्येक %2 में',
    CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'लूप से बाहर निकलें',
    CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'अगले चरण पर जाएं',

    // Math Blocks
    MATH_NUMBER_TOOLTIP: 'एक संख्या।',
    MATH_ARITHMETIC_TOOLTIP_ADD: 'दो संख्याओं को जोड़ें।',
    MATH_ARITHMETIC_TOOLTIP_MINUS: 'दो संख्याओं को घटाएं।',
    MATH_ARITHMETIC_TOOLTIP_MULTIPLY: 'दो संख्याओं को गुणा करें।',
    MATH_ARITHMETIC_TOOLTIP_DIVIDE: 'दो संख्याओं को विभाजित करें।',
    MATH_SINGLE_OP_ROOT: 'वर्गमूल',
    MATH_SINGLE_TOOLTIP_NEG: 'संख्या का ऋणात्मक मान।',
    MATH_SINGLE_TOOLTIP_ROOT: 'संख्या का वर्गमूल लौटाएं।',
    MATH_TRIG_SIN: 'साइन',
    MATH_TRIG_COS: 'कोसाइन',
    MATH_TRIG_TAN: 'टैन',
    MATH_TRIG_TOOLTIP_SIN: 'संख्या का साइन लौटाएं।',
    MATH_CONSTANT_TOOLTIP_PI: 'π (3.14159...) का मान।',
    MATH_CONSTANT_TOOLTIP_E: 'e (2.71828...) का मान।',
    MATH_CONSTANT_TOOLTIP_GOLDEN_RATIO: 'स्वर्णिम अनुपात (1.61803...) का मान।',
    MATH_ROUND_TOOLTIP_ROUND: 'संख्या को निकटतम पूर्णांक में परिवर्तित करें।',
    MATH_ROUND_TOOLTIP_CEILING: 'संख्या को अगले पूर्णांक में परिवर्तित करें।',
    MATH_ROUND_TOOLTIP_FLOOR: 'संख्या को पिछले पूर्णांक में परिवर्तित करें।',
    MATH_MODULO_TOOLTIP: 'दो संख्याओं का शेषफल।',
    MATH_CONSTRAIN_TOOLTIP: 'संख्या को निर्दिष्ट सीमा में रखें।',
    MATH_RANDOM_INT_TOOLTIP: 'एक यादृच्छिक पूर्णांक उत्पन्न करें।',
    MATH_RANDOM_FLOAT_TOOLTIP: 'एक यादृच्छिक दशमलव संख्या उत्पन्न करें।',

    // Text Blocks
    // TEXT_JOIN_TITLE_CREATEWITH: 'टेक्स्ट जोड़ें',
    // TEXT_APPEND_TITLE: 'टेक्स्ट जोड़ें',
    // TEXT_LENGTH_TITLE: 'टेक्स्ट की लंबाई',
    // TEXT_TEXT_TOOLTIP: 'एक टेक्स्ट स्ट्रिंग।',
    // TEXT_JOIN_TOOLTIP: 'दो या अधिक टेक्स्ट को जोड़ें।',
    // TEXT_APPEND_TOOLTIP: 'एक टेक्स्ट को चर में जोड़ें।',
    // TEXT_LENGTH_TOOLTIP: 'टेक्स्ट की लंबाई।',
    // TEXT_ISEMPTY_TOOLTIP: 'यदि टेक्स्ट खाली है, तो सही लौटाएं।',
    // TEXT_INDEXOF_TOOLTIP: 'टेक्स्ट में एक उपस्ट्रिंग की स्थिति।',
    // TEXT_CHARAT_TOOLTIP: 'टेक्स्ट का एक विशिष्ट अक्षर।',
    // TEXT_GET_SUBSTRING_TOOLTIP: 'टेक्स्ट का एक भाग।',
    // TEXT_CHANGE_CASE_TOOLTIP_UPPERCASE: 'टेक्स्ट को बड़े अक्षरों में बदलें।',
    // TEXT_CHANGE_CASE_TOOLTIP_LOWERCASE: 'टेक्स्ट को छोटे अक्षरों में बदलें।',
    // TEXT_TRIM_TOOLTIP: 'टेक्स्ट से अतिरिक्त स्थान हटाएं।',
    // TEXT_PRINT_TOOLTIP: 'टेक्स्ट को प्रिंट करें।',
    // TEXT_PROMPT_TOOLTIP: 'उपयोगकर्ता से इनपुट प्राप्त करें।',

    // Lists Blocks
    LISTS_CREATE_WITH_INPUT_WITH: 'सूची बनाएं',
    LISTS_CREATE_EMPTY_TOOLTIP: 'एक खाली सूची बनाएं।',
    LISTS_CREATE_WITH_CONTAINER_TITLE_ADD: 'सूची',
    LISTS_CREATE_WITH_ITEM_TITLE: 'आइटम',
    LISTS_REPEAT_TOOLTIP: 'एक सूची बनाएं जिसमें आइटम कई बार दोहराए जाते हैं।',
    LISTS_REPEAT_TITLE: '%1 को %2 बार दोहराएं',
    LISTS_LENGTH_TOOLTIP: 'सूची की लंबाई ज्ञात करें।',
    LISTS_ISEMPTY_TOOLTIP: 'यदि सूची खाली है, तो सही लौटाएं।',
    LISTS_GET_INDEX_TOOLTIP_GET_FROM: 'सूची से आइटम प्राप्त करें।',
    LISTS_SET_INDEX_TOOLTIP_SET: 'सूची में आइटम सेट करें।',
    LISTS_GET_SUBLIST_TOOLTIP: 'सूची का एक हिस्सा प्राप्त करें।',
    LISTS_SPLIT_TOOLTIP: 'टेक्स्ट को सूची में विभाजित करें।',
    LISTS_SORT_TOOLTIP: 'सूची को क्रमबद्ध करें।',
    LISTS_INDEXOF_TOOLTIP: 'सूची में एक आइटम की स्थिति।',

    // Variables Blocks
    VARIABLES_SET: 'सेट करें %1 को %2',
    VARIABLES_GET_TOOLTIP: 'चर का मान लौटाएं।',

    // Procedures Blocks
    PROCEDURES_DEFNORETURN_PROCEDURE: 'फ़ंक्शन बनाएं',
    PROCEDURES_CALLRETURN_TOOLTIP: 'फ़ंक्शन को कॉल करें।',
    PROCEDURES_DEFRETURN_PROCEDURE: 'फ़ंक्शन बनाएं जो मान लौटाता है।',
    PROCEDURES_IFRETURN_TOOLTIP: 'यदि मान सही है, तो फ़ंक्शन से मान लौटाएं।',

        // Common Tooltips
        BLOCKS_TOOLTIP_DELETE_BLOCK: 'ब्लॉक हटाएं।',
        BLOCKS_TOOLTIP_DUPLICATE_BLOCK: 'ब्लॉक की प्रतिलिपि बनाएं।',
        BLOCKS_TOOLTIP_HELP: 'इस ब्लॉक के बारे में जानकारी प्राप्त करें।',

            // Miscellaneous
    COLOUR_PICKER_TOOLTIP: 'एक रंग चुनें।',
    COLOUR_RANDOM_TOOLTIP: 'एक यादृच्छिक रंग उत्पन्न करें।',
    COLOUR_RGB_TOOLTIP: 'एक रंग बनाएं जो लाल, हरे और नीले के मिश्रण से बना है।',
    COLOUR_BLEND_TOOLTIP: 'दो रंगों को मिलाकर एक नया रंग बनाएं।',
    MUTATOR_TOOLTIP: 'इस ब्लॉक को संशोधित करें।',
    MUTATOR_PLUS_TOOLTIP: 'एक नया आइटम जोड़ें।',
    MUTATOR_MINUS_TOOLTIP: 'एक आइटम हटाएं।',
    MUTATOR_RENAME_TOOLTIP: 'चर का नाम बदलें।',
    MUTATOR_DEFAULT_NAME: 'नया चर',
    MUTATOR_VARIABLE_TOOLTIP: 'चर का उपयोग करें।',
    MUTATOR_FUNCTION_TOOLTIP: 'फ़ंक्शन का उपयोग करें।',
    MUTATOR_LOOP_TOOLTIP: 'लूप को संशोधित करें।',
    MUTATOR_IF_TOOLTIP: 'शर्त को संशोधित करें।',
    MUTATOR_LIST_TOOLTIP: 'सूची को संशोधित करें।',
    MUTATOR_TEXT_TOOLTIP: 'टेक्स्ट को संशोधित करें।',
    MUTATOR_MATH_TOOLTIP: 'गणितीय ऑपरेशन को संशोधित करें।',
    MUTATOR_LOGIC_TOOLTIP: 'तार्किक ऑपरेशन को संशोधित करें।',
    MUTATOR_COLOUR_TOOLTIP: 'रंग को संशोधित करें।',
    MUTATOR_PROCEDURE_TOOLTIP: 'फ़ंक्शन को संशोधित करें।',
    MUTATOR_COMMENT_TOOLTIP: 'टिप्पणी जोड़ें।',
    MUTATOR_WARNING_TOOLTIP: 'चेतावनी: इस ब्लॉक को सावधानी से उपयोग करें।',
    MUTATOR_ERROR_TOOLTIP: 'त्रुटि: इस ब्लॉक को ठीक करें।',

  });
};