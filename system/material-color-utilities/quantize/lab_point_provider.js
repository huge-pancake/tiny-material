import"./point_provider";import*as utils from"../utils/color_utils";class LabPointProvider{fromInt(r){return utils.labFromArgb(r)}toInt(r){return utils.argbFromLab(r[0],r[1],r[2])}distance(r,t){var o=r[0]-t[0],i=r[1]-t[1],r=r[2]-t[2];return o*o+i*i+r*r}}export{LabPointProvider};